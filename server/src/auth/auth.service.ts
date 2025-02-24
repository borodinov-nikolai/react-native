import { ForbiddenException, Injectable, UnauthorizedException } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { UsersService } from 'src/users/users.service';
import { SignUpInput } from './dto/signUp.unput';
import * as bcrypt from 'bcrypt'
import { TokenService } from './token.service';
import { SignInInput } from './dto/signIn.input';
import { UpdateMeInput } from './dto/update-me.input';

@Injectable()
export class AuthService {
   constructor(private readonly usersService: UsersService, private readonly db: DbService, private readonly tokenService: TokenService) { }

   async signUp(data: SignUpInput) {
      const user = await this.usersService.create(data)
      const { id, login, role } = user
      const tokens = await this.tokenService.createTokens({ id, login, role })
      return tokens
   }

   async signIn(data: SignInInput) {
      const user = await this.db.user.findUnique({
         where: {
            login: data.login
         }
      })


      if (!user) {
         throw new UnauthorizedException("Wrong credentials")
      }

      const passwordCheck = await bcrypt.compare(data.password, user.password)

      if (!passwordCheck) {
         throw new UnauthorizedException("Wrong credentials")
      }
      const { id, login, role } = user
      const tokens = await this.tokenService.createTokens({ id, login, role })
      return tokens
   }

   async refresh(token?: string) {
      if (!token) {
         throw new UnauthorizedException()
      }

      const payload: { id: number, login: string, role: 'SUPER_ADMIN' | 'ADMIN' | 'USER' } | undefined = await this.tokenService.decodeToken(token)

      if (!payload) {
         throw new UnauthorizedException()
      }

      const tokens = await this.tokenService.createTokens(payload)

      return tokens
   }

   async getMe(token?: string) {

      if (!token) {
         throw new ForbiddenException()
      }

      const payload: { id: number } | undefined = await this.tokenService.decodeToken(token)
      if (!payload) {
         throw new ForbiddenException()
      }

      try {
         const user = await this.db.user.findUnique({
            where: {
               id: payload.id
            },
            include: {
               userNfts: {
                  orderBy: {
                     id: 'asc'
                  },
                  include: {
                     checkedItems: true,
                     nft: {
                        include: {
                           products: true,
                           preview: true
                        }
                     }
                  }
               },
               userSeries: {
                  orderBy: {
                     id: 'asc'
                  },
                  include: {
                     checkedItems: true,
                     series: {
                        include: {
                           products: true,
                           preview: true
                        }
                     }
                  }
               }

            }
         })
         if (!user) {
            throw new ForbiddenException()
         }
         delete user.password
         return user
      } catch (e) {
         console.error(e)
         throw new ForbiddenException()
      }
   }

   async updateMe(token?: string, data?: UpdateMeInput) {
      const { password } = data || {}

      if (!token) {
         throw new ForbiddenException()
      }

      const payload: { id: number } | undefined = await this.tokenService.decodeToken(token)

      if (!payload) {
         throw new ForbiddenException()
      }

      try {
         const salt = 12
         const hash = password ? await bcrypt.hash(password, salt) : undefined
         const user = await this.db.user.update({
            where: {
               id: payload.id
            },
            data: {
               ...data,
               role: 'USER',
               password: hash
            }
         })
         if (!user) {
            throw new UnauthorizedException()
         }
         delete user.password
         return user
      } catch (e) {
         console.error(e)
         throw new ForbiddenException()
      }

   }


   async getAdmin(token?: string) {

      if (!token) {
         throw new ForbiddenException()
      }

      const payload: { id: number } | undefined = await this.tokenService.decodeToken(token)
      if (!payload) {
         throw new ForbiddenException()
      }

      try {
         const user = await this.db.user.findUnique({
            where: {
               id: payload.id
            }
         })

         if (!user || user.role === 'USER') {
            throw new ForbiddenException()
         }
         delete user.password
         return user
      } catch (e) {
         console.error(e)
         throw new ForbiddenException()
      }
   }

   async checkSuperUser() {
      const user = await this.db.user.findFirst({
         where: {
            role: "SUPER_ADMIN"
         }
      })

      if (user) {
         return true
      } else {
         return false
      }
   }
}
