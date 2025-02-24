import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Product } from 'src/products/entities/product.entity';
import { Series } from 'src/series/entities/series.entity';

@ObjectType()
export class UserSery {
  @Field()
  id: number
  @Field()
  userId: number
  @Field()
  seriesId: number
  @Field()
  saved: boolean
  @Field(()=> [Product], {nullable: true})
  checkedItems?: Product[]
  @Field(()=> Series, {nullable: true})
  series?: Series
  @Field()
  createdAt: Date
  @Field()
  updatedAt: Date
}
