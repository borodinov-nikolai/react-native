import { ObjectType, Field, registerEnumType } from '@nestjs/graphql';
import { PropductType } from '@prisma/client';
import { Image } from 'src/images/entities/image.entity';
import { Nft } from 'src/nfts/entities/nft.entity';
import { Series } from 'src/series/entities/series.entity';


registerEnumType(PropductType, {
  name: 'ProductType'
})

@ObjectType()
export class Product {
  @Field()
  id: number
  @Field(()=> PropductType)
  type: PropductType
  @Field()
  name: string
  @Field()
  number: number
  @Field()
  price: number
  @Field({nullable: true})
  description?: string
  @Field()
  stock: number
  @Field(()=> [String], {nullable: true})
  whereToShow?: string[]
  @Field(()=> Image, {nullable: true})
  catalogPreview?: Image
  @Field(()=> Image, {nullable: true})
  seriesPreview?: Image
  @Field(()=> Image, {nullable: true})
  nftPreview?: Image
  @Field(()=> [Image], {nullable: true})
  images?: Image[]
  @Field(()=> [Image], {nullable: true})
  stickers?: Image[]
  @Field({nullable: true})
  exclusive?: string
  @Field(()=> [String], {nullable: true})
  features?: string[]
  @Field({nullable: true})
  category?: string
  @Field({nullable: true})
  seriesId?: number
  @Field(()=> Series, {nullable: true})
  series?: Series
  @Field({nullable: true})
  nftId?: number
  @Field(()=> Nft, {nullable: true})
  nft?: Nft
  @Field()
  new: boolean
  @Field({nullable: true})
  createdAt?: Date
  @Field({nullable: true})
  updatedAt?: Date
}
