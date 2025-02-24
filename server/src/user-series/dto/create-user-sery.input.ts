import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserSeryInput {
  @Field()
  userId: number
  @Field()
  seriesId: number
  @Field({nullable: true})
  saved?: boolean
  @Field(()=> [Int])
  checkedItems: number[]
}
