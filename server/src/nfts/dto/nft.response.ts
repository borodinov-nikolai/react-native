import { Field, ObjectType } from "@nestjs/graphql"
import { Meta } from "src/types/meta.entitie"
import { Nft } from "../entities/nft.entity"



@ObjectType()
export class NftResponse {
    @Field(() => [Nft])
    data: Nft[]
    @Field(() => Meta, { nullable: true })
    meta?: Meta
}