import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserNftService } from './user-nft.service';
import { UserNft } from './entities/user-nft.entity';
import { CreateUserNftInput } from './dto/create-user-nft.input';
import { UpdateUserNftInput } from './dto/update-user-nft.input';

@Resolver(() => UserNft)
export class UserNftResolver {
  constructor(private readonly userNftService: UserNftService) {}

  @Mutation(() => UserNft)
  createUserNft(@Args('createUserNftInput') createUserNftInput: CreateUserNftInput) {
    return this.userNftService.create(createUserNftInput);
  }

  @Query(() => [UserNft], { name: 'userNft' })
  findAll() {
    return this.userNftService.findAll();
  }

  @Query(() => UserNft, { name: 'userNft' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.userNftService.findOne(id);
  }

  @Mutation(() => UserNft)
  updateUserNft(@Args('updateUserNftInput') updateUserNftInput: UpdateUserNftInput) {
    return this.userNftService.update(updateUserNftInput.id, updateUserNftInput);
  }

  @Mutation(() => UserNft)
  removeUserNft(@Args('id', { type: () => Int }) id: number) {
    return this.userNftService.remove(id);
  }
}
