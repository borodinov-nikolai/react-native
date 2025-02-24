import { ObjectType, Field } from '@nestjs/graphql';
import { Image } from 'src/images/entities/image.entity';
import { Product } from 'src/products/entities/product.entity';


@ObjectType()
export class Nft {
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
  @Field({nullable: true})
  event1_desc?: string
  @Field({nullable: true})
  event1_date?: Date
  @Field({nullable: true})
  event2_desc?: string
  @Field({nullable: true})
  event2_date?: Date
  @Field({nullable: true})
  event3_desc?: string
  @Field({nullable: true})
  event3_date?: Date
  @Field({nullable: true})
  event4_desc?: string
  @Field({nullable: true})
  event4_quarter?: number
  @Field({nullable: true})
  event4_completed?: boolean
  @Field(()=> Image, {nullable: true})
  primaryFigureImage?: Image
  @Field(()=> Image, {nullable: true})
  preview?: Image
  @Field(()=> Image, {nullable: true})
  image?: Image
  @Field(()=> Image, {nullable: true})
  calendarImage?: Image
  @Field(()=> [Product], {nullable: true})
  products?: Product[]
  @Field({nullable: true})
  createdAt?: Date
  @Field({nullable: true})
  updatedAt?: Date
}
