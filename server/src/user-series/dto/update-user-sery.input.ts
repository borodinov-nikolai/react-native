import { CreateUserSeryInput } from './create-user-sery.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserSeryInput extends PartialType(CreateUserSeryInput) {
  @Field(() => Int)
  id: number
}
