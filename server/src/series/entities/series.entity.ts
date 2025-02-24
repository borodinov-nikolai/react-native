import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Image } from 'src/images/entities/image.entity';
import { Product } from 'src/products/entities/product.entity';

@ObjectType()
export class Series {
  @Field()
  id: number
  @Field()
  name: string
  @Field()
  originalName: string
  @Field({nullable: true})
  primaryFigureName?: string
  @Field({nullable: true})
  primaryFigureNumber?: number
  @Field(()=> Image, {nullable: true})
  primaryFigureImage?: Image
  @Field(()=> Image, {nullable: true})
  preview?: Image
  @Field(()=> Image, {nullable: true})
  image?: Image
  @Field(()=> [Product], {nullable: true})
  products?: Product[]
  @Field({nullable: true})
  createdAt?: Date
  @Field({nullable: true})
  updatedAt?: Date
}
