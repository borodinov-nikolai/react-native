import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Image } from 'src/images/entities/image.entity';
import { Product } from 'src/products/entities/product.entity';

@ObjectType()
export class NftPage {
  @Field()
  id: number
  @Field({nullable: true})
  description?: string
  @Field({nullable: true})
  standartSetQuantity?: number
  @Field({nullable: true})
  premiumSetQuantity?: number
  @Field(()=> Image, {nullable: true})
  newReleasePreview?: Image
  @Field({nullable: true})
  newReleasePreviewId?: number
  @Field(()=> Date,{nullable: true})
  timer?: Date
  @Field(()=> Product, {nullable: true})
  standartSet?: Product
  @Field(()=> Product, {nullable: true})
  premiumSet?: Product
}
