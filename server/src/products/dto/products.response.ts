import { Field, ObjectType } from "@nestjs/graphql";
import { Product } from "../entities/product.entity";
import { Meta } from "src/types/meta.entitie";



@ObjectType()
export class ProductsResponse {
    @Field(()=> [Product])
   data: Product[]
   @Field(()=> Meta, {nullable: true})
   meta?: Meta
}