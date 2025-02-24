import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserSeriesService } from './user-series.service';
import { UserSery } from './entities/user-sery.entity';
import { CreateUserSeryInput } from './dto/create-user-sery.input';
import { UpdateUserSeryInput } from './dto/update-user-sery.input';


@Resolver(() => UserSery)
export class UserSeriesResolver {
  constructor(private readonly userSeriesService: UserSeriesService){}

  @Mutation(() => UserSery)
  createUserSery(@Args('createUserSeryInput') createUserSeryInput: CreateUserSeryInput) {
    return this.userSeriesService.create(createUserSeryInput);
  }

  @Query(() => [UserSery], { name: 'userSeries' })
  findAll() {
    return this.userSeriesService.findAll();
  }

  @Query(() => UserSery, { name: 'userSery' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.userSeriesService.findOne(id);
  }

  @Mutation(() => UserSery)
  updateUserSery(@Args('updateUserSeryInput') updateUserSeryInput: UpdateUserSeryInput) {
    return this.userSeriesService.update(updateUserSeryInput.id, updateUserSeryInput);
  }

  @Mutation(() => UserSery)
  removeUserSery(@Args('id', { type: () => Int }) id: number) {
    return this.userSeriesService.remove(id);
  }
}
