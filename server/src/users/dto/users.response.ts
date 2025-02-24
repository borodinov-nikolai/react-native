import { Field, ObjectType } from "@nestjs/graphql";
import { User } from "../entities/user.entity";
import { Meta } from "src/types/meta.entitie";




@ObjectType()
export class UsersResponse {
  @Field(() => [User])
  data: User[];

  @Field(() => Meta, { nullable: true })
  meta?: Meta;
}
