import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateProductInput {
  @Field()
  name: string
  @Field()
  number: number
  @Field({nullable: true})
  price?: number
  @Field({nullable: true})
  description?: string
  @Field(()=> Int, {nullable: true}) 
  catalogPreviewId?: number
  @Field(()=> Int, {nullable: true}) 
  seriesPreviewId?: number
  @Field(()=> Int, {nullable: true}) 
  nftPreviewId?: number
  @Field(()=> [String], {nullable: true})
  whereToShow?: string[]
  @Field(()=> [Int], {nullable: true})
  images?: number[]
  @Field(()=> [Int], {nullable: true})
  stickers?: number[]
  @Field({nullable: true})
  stock?: number
  @Field({nullable: true})
  exclusive?: string
  @Field(()=> [String], {nullable: true})
  features?: string[]
  @Field({nullable: true})
  category?: string
  @Field({nullable: true})
  new?: boolean
  @Field({nullable: true})
  seriesId?: number
  @Field({nullable: true})
  nftId?: number
}
