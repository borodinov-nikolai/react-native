import { ConflictException, ForbiddenException, Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { CreateUserInput } from './dto/create-user.input';
import * as bcrypt from 'bcrypt'
import { UpdateUserInput } from './dto/update-user.input';
import { TokenService } from 'src/auth/token.service';
import { GetUsersArgs } from './dto/get-users.args';

@Injectable()
export class UsersService {
constructor (private readonly db: DbService, private readonly tokenService: TokenService){}


   findAll = async (args: GetUsersArgs)=> {
    const {pagination, orderBy, search} = args || {}
    const {page = 1, pageSize = 10} = pagination || {}
    const skip = (+page - 1) * +pageSize || undefined
    const take = +pageSize || undefined
      const users = await this.db.user.findMany({
        skip,
        take,
        orderBy: {
          [orderBy?.field ?? 'id']: orderBy?.value ?? 'asc'
        },
        ...(search && {
          where: {
            login: {
              contains: search,
              mode: 'insensitive'
            }
          }
        }),
        select: {
          id: true,
          login: true,
          role: true,
          firstName: true,
          secondName: true,
          email: true,
          phone: true,
          country: true,
          city: true
        }
      })
      const count = await this.db.user.count({
        ...(search && {
          where: {
            login: {
              contains: search,
              mode: 'insensitive'
            }
          }
        })
      })
      const pageCount = Math.ceil(count / +pageSize)
      return {data: users, meta: pagination && {pagination: {page: +page, pageSize: +pageSize, pageCount, total: count}}}
   }

   findOne = async (id: number)=> {
     const user = await this.db.user.findUnique({
      where: {
        id
      }
     })
     delete user.password
     return user
   } 

   create = async (input: CreateUserInput)=> {
    const {password, ...data} = input
    const salt = 12
    const hash = await bcrypt.hash(password, salt)
    const candidatLogin = await this.db.user.findUnique({
      where: {
        login: data.login
      }
    })

    if(candidatLogin) {
      throw new ConflictException('User with this login already exists')
    }
    const superadmin = await this.db.user.findFirst({
      where: {
        role: 'SUPER_ADMIN'
      }
    })

    if(data.role === 'SUPER_ADMIN' && superadmin) {
      throw new ConflictException('Superadmin already exists')
    }

    const user = await this.db.user.create({
        data: {
          password: hash,
          ...data
        }
    })
      delete user.password
      return user
  }

  update = async (input: UpdateUserInput, token?: string)=> {
    const {id, password, ...data} = input
   
      const salt = 12
      const hash = password ? await bcrypt.hash(password, salt) : undefined

      const userToUpdate = await this.db.user.findFirst({
        where: {
          id
        }
      })
   
       const payload: { id: number, role: string } | undefined = await this.tokenService.decodeToken(token)
            if (!payload) {
               throw new ForbiddenException()
            }

            const userWithThisLogin = await this.db.user.findUnique({
              where: {
                login: data.login
              }
            })
        
            if(userWithThisLogin && userWithThisLogin.id !== userToUpdate.id) {
              throw new ConflictException('User with this login already exists')
            }

           

            if(userToUpdate.role === 'SUPER_ADMIN' && payload?.role !=='SUPER_ADMIN' ) {
              throw new ForbiddenException()
            }
    

    const user = await this.db.user.update({
      where:{
        id
      },
       data: {
        password: hash,
        ...data
       }
    })
    delete user.password
    return user
  }

  remove = async (id: number)=> {

    const candidat = await this.db.user.findFirst({
      where: {
        id
      }
    })

    if(candidat.role === 'SUPER_ADMIN') {
      throw new ForbiddenException()
    }

    
       const user =  await this.db.user.delete({
        where: {
          id
        }
       })
       
       delete user.password
       return user
  }
  
}
