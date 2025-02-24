import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { NftPageService } from './nft-page.service';
import { NftPage } from './entities/nft-page.entity';
import { CreateNftPageInput } from './dto/create-nft-page.input';
import { UpdateNftPageInput } from './dto/update-nft-page.input';

@Resolver(() => NftPage)
export class NftPageResolver {
  constructor(private readonly nftPageService: NftPageService) {}

  @Mutation(() => NftPage)
  createNftPage(@Args('createNftPageInput') createNftPageInput: CreateNftPageInput) {
    return this.nftPageService.create(createNftPageInput);
  }

  @Query(() => [NftPage], { name: 'nftPage' })
  findAll() {
    return this.nftPageService.findAll();
  }

  @Query(() => NftPage, { name: 'nftPage' })
  findOne() {
    return this.nftPageService.findOne();
  }

  @Mutation(() => NftPage)
  updateNftPage(@Args('updateNftPageInput') updateNftPageInput: UpdateNftPageInput) {
    return this.nftPageService.update(updateNftPageInput);
  }

  @Mutation(() => NftPage)
  removeNftPage(@Args('id', { type: () => Int }) id: number) {
    return this.nftPageService.remove(id);
  }
}
