import { Resolver, Query, Mutation, Args, Int, Context } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UseGuards } from '@nestjs/common';
import { RolesGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/auth/roles.decorator';
import { UsersResponse } from './dto/users.response';
import { GetUsersArgs } from './dto/get-users.args';




@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}
   
  @UseGuards(RolesGuard)
  @Roles(['SUPER_ADMIN', 'ADMIN'])
  @Mutation(() => User)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
     return this.usersService.create(createUserInput)
  }

  @UseGuards(RolesGuard)
  @Roles(['SUPER_ADMIN', 'ADMIN'])
  @Query(() => UsersResponse, { name: 'users' })
  findAll(@Args('args', {type: ()=> GetUsersArgs, nullable: true}) args: GetUsersArgs) {
       return this.usersService.findAll(args)
  }

  @UseGuards(RolesGuard)
  @Roles(['SUPER_ADMIN', 'ADMIN'])
  @Query(() => User, { name: 'user' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.findOne(id)
  }

  @UseGuards(RolesGuard)
  @Roles(['SUPER_ADMIN', 'ADMIN'])
  @Mutation(() => User)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput, @Context('req') req: Request) {
    const token = req.headers['authorization']?.split(' ')[1]
    return this.usersService.update(updateUserInput, token)
  }

  @Mutation(() => User)
  removeUser(@Args('id', { type: () => Int }) id: number) {
     return this.usersService.remove(id)
  }
}
