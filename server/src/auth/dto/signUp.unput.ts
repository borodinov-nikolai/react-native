import { InputType, Field } from '@nestjs/graphql';
import { Role } from '@prisma/client';





@InputType()
export class SignUpInput {
  @Field()
  login: string
  @Field()
  password: string
  @Field(()=> Role)
  role?: Role
}