import { Args, Context, Field, Mutation, ObjectType, Query, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { SignUpInput } from './dto/signUp.unput';
import { Auth } from './entities/auth.entity';
import { Request, Response } from 'express';
import { User } from 'src/users/entities/user.entity';
import { UseGuards } from '@nestjs/common';
import { RolesGuard } from './roles.guard';
import { Roles } from './roles.decorator';
import { SignInInput } from './dto/signIn.input';
import { UpdateMeInput } from './dto/update-me.input';



@ObjectType()
class AuthResponse {
  @Field()
  jwt: string;
}

@Resolver(() => Auth)
export class AuthResolver {
  constructor(private readonly authService: AuthService) { }

  @Mutation(() => AuthResponse)
  async signUp(@Args('signUpInput') signUpInput: SignUpInput, @Context('res') res: Response): Promise<AuthResponse> {
    const { accessToken, refreshToken } = await this.authService.signUp(signUpInput)
    res.cookie('jwt', refreshToken, { httpOnly: true, maxAge: 30 * 24 * 60 * 60 * 1000 })
    return { jwt: accessToken }
  }

  @Mutation(()=> AuthResponse)
  async signIn(@Args('signInInput') signInINput: SignInInput, @Context('res') res: Response): Promise<AuthResponse> {
    const {remember, ...input} = signInINput
    const {accessToken, refreshToken} = await this.authService.signIn(input)
    if(remember) {
      res.cookie('jwt', refreshToken, { httpOnly: true, maxAge: 30 * 24 * 60 * 60 * 1000 })
    }
    return {jwt: accessToken}
  }

  @Mutation(() => AuthResponse)
  async tokensRefresh(@Context('res') res: Response, @Context('req') req: Request): Promise<AuthResponse> {
    const refreshToken = req.cookies.jwt
    const tokens = await this.authService.refresh(refreshToken)
    if (tokens) {
      res.cookie('jwt', tokens.refreshToken, { httpOnly: true, maxAge: 30 * 24 * 60 * 60 * 1000 })
      return { jwt: tokens.accessToken }
    }
  }

  @Mutation(()=> Boolean)
  async signOut(@Context('res') res: Response): Promise<boolean> {
    res.clearCookie('jwt')
    return true
  }

  @Query(()=> Boolean) 
  async checkSuperUser() {
     return await this.authService.checkSuperUser()
  }

  @UseGuards(RolesGuard)
  @Roles(['USER'])
  @Query(() => User)
  async getMe(@Context('req') req: Request): Promise<User> {
    const token = req.headers['authorization']?.split(' ')[1]
    return await this.authService.getMe(token)
  }

  @Mutation(()=> User)
  async updateMe(@Args('updateMeInput') updateMeInput: UpdateMeInput , @Context('req') req: Request): Promise<User> {
    const token = req.headers['authorization']?.split(' ')[1]
    return await this.authService.updateMe(token, updateMeInput)
  }

  @UseGuards(RolesGuard)
  @Roles(['SUPER_ADMIN', 'ADMIN'])
  @Query(() => User)
  async getAdmin(@Context('req') req: Request): Promise<User> {
    const token = req.headers['authorization']?.split(' ')[1]
    return await this.authService.getMe(token)
  }

}
