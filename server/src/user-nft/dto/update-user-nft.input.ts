import { CreateUserNftInput } from './create-user-nft.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserNftInput extends PartialType(CreateUserNftInput) {
  @Field(() => Int)
  id: number;
}
