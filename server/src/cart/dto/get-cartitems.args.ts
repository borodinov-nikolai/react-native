import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class GetCartItemsArgs {
  @Field(()=> [Int])
  ids: number[];
}
