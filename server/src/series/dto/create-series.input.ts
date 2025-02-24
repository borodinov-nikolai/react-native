import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateSeriesInput {
  @Field()
  name: string
  @Field()
  originalName: string
  @Field({nullable: true})
  primaryFigureName: string
  @Field({nullable: true})
  primaryFigureNumber: number
  @Field(()=> Int, {nullable: true})
  primaryFigureImageId?: number
  @Field(()=> Int, {nullable: true})
  previewImageId?: number
  @Field(()=> Int, {nullable: true})
  imageId?: number
}
