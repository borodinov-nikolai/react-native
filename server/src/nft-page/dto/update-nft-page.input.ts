import { CreateNftPageInput } from './create-nft-page.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateNftPageInput extends PartialType(CreateNftPageInput) {
  @Field(() => Int)
  id: number
}
