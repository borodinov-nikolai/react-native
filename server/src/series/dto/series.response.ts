import { Field, ObjectType } from "@nestjs/graphql"
import { Series } from "../entities/series.entity"
import { Meta } from "src/types/meta.entitie"




@ObjectType()
export class SeriesResponse {
    @Field(() => [Series])
    data: Series[]
    @Field(() => Meta, { nullable: true })
    meta?: Meta
}