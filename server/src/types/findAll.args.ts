import { Field, InputType, Int, registerEnumType } from "@nestjs/graphql";





export enum Sort {
  asc = 'asc',
  desc = 'desc'
}

registerEnumType(Sort, {
  name: 'Sort'
})

@InputType()
export class Pagination {
  @Field(()=> Int)
  page: number
  @Field(()=> Int)
  pageSize: number
}

@InputType()
export class OrderBy {
  @Field(()=> String)
  field: string
  @Field(()=> Sort)
  value: Sort
}

@InputType()
export class FindAllArgs {
  @Field(()=> Pagination, {nullable: true})
  pagination?: Pagination
  @Field(()=> OrderBy, {nullable: true})
  orderBy?: OrderBy
  @Field(()=> String, {nullable: true})
  search?: string
}