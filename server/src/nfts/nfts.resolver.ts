import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { NftsService } from './nfts.service';
import { Nft } from './entities/nft.entity';
import { CreateNftInput } from './dto/create-nft.input';
import { UpdateNftInput } from './dto/update-nft.input';
import { NftResponse } from './dto/nft.response';
import { GetNftArgs } from './dto/get-nft.args';
import { UseGuards } from '@nestjs/common';
import { RolesGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/auth/roles.decorator';

@Resolver(() => Nft)
export class NftsResolver {
  constructor(private readonly nftsService: NftsService) { }

  @UseGuards(RolesGuard)
  @Roles(["SUPER_ADMIN", "ADMIN"])
  @Mutation(() => Nft)
  createNft(@Args('createNftInput') createNftInput: CreateNftInput) {
    return this.nftsService.create(createNftInput);
  }

  @Query(() => NftResponse, { name: 'nfts' })
  findAll(@Args('args', { type: () => GetNftArgs, nullable: true }) args: GetNftArgs) {
    return this.nftsService.findAll(args);
  }

  @Query(() => Nft, { name: 'nft' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.nftsService.findOne(id);
  }

  @UseGuards(RolesGuard)
  @Roles(["SUPER_ADMIN", "ADMIN"])
  @Mutation(() => Nft)
  updateNft(@Args('updateNftInput') updateNftInput: UpdateNftInput) {
    return this.nftsService.update(updateNftInput.id, updateNftInput);
  }

  @UseGuards(RolesGuard)
  @Roles(["SUPER_ADMIN", "ADMIN"])
  @Mutation(() => Nft)
  removeNft(@Args('id', { type: () => Int }) id: number) {
    return this.nftsService.remove(id);
  }
}
