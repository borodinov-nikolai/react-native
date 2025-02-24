import { Field, InputType } from "@nestjs/graphql";
import { FindAllArgs } from "src/types/findAll.args";



@InputType()
export class GetProductsArgs extends FindAllArgs {
    @Field({nullable: true})
    category?: string
    @Field({nullable: true})
    isAvailable?: boolean
    @Field({nullable: true})
    whereToShow?: string
}