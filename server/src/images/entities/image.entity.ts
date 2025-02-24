import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Image {
  @Field(() => Int)
  id: number
  @Field(() => String)
  name: string
  @Field(() => String)
  url: string
  @Field(() => Date, {nullable: true})
  createdAt?: Date
  @Field(() => Date, {nullable: true})
  updatedAt?: Date
}
