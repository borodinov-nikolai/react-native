import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserNftInput {
  @Field()
  userId: number
  @Field()
  nftId: number
  @Field({nullable: true})
  saved?: boolean
  @Field(()=> [Int])
  checkedItems: number[]
}
