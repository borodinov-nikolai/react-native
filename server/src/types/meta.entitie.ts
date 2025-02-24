import { Field, Int, ObjectType } from "@nestjs/graphql"



@ObjectType()
export class MetaPagination {
    @Field(() => Int)
    page: number
    @Field(() => Int)
    pageSize: number
    @Field(() => Int)
    pageCount: number
    @Field(() => Int)
    total: number

}

@ObjectType()
export class Meta {
    @Field(()=> MetaPagination, {nullable: true})
    pagination?: MetaPagination
}

