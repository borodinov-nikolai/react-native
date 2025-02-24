import { Field, ObjectType } from "@nestjs/graphql";
import { Image } from "../entities/image.entity";
import { Meta } from "src/types/meta.entitie";




@ObjectType()
export class ImagesResponse {
  @Field(() => [Image])
  data: Image[];

  @Field(() => Meta, { nullable: true })
  meta?: Meta;
}
