import { ObjectType, Field } from '@nestjs/graphql';
import { Nft } from 'src/nfts/entities/nft.entity';
import { Product } from 'src/products/entities/product.entity';

@ObjectType()
export class UserNft {
   @Field()
   id: number
   @Field()
   userId: number
   @Field()
   nftId: number
   @Field()
   saved: boolean
   @Field(()=> [Product], {nullable: true})
   checkedItems?: Product[]
   @Field(()=> Nft, {nullable: true})
   nft?: Nft
   @Field()
   createdAt: Date
   @Field()
   updatedAt: Date
}
