import { InputType, Field } from '@nestjs/graphql';


@InputType()
export class SignInInput {
  @Field()
  login: string
  @Field()
  password: string
  @Field(()=> Boolean, {nullable: true})
  remember?: boolean
}