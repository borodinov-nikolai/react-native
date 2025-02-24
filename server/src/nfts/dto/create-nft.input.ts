import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateNftInput {
  @Field()
  name: string
  @Field()
  originalName: string
  @Field({nullable: true})
  primaryFigureName: string
  @Field({nullable: true})
  primaryFigureNumber: number
  @Field({nullable: true})
  event1_desc?: string
  @Field({nullable: true})
  event1_date?: Date
  @Field({nullable: true})
  event2_desc?: string
  @Field({nullable: true})
  event2_date?: Date
  @Field({nullable: true})
  event3_desc?: string
  @Field({nullable: true})
  event3_date?: Date
  @Field({nullable: true})
  event4_desc?: string
  @Field({nullable: true})
  event4_quarter?: number
  @Field({nullable: true})
  event4_completed?: boolean
  @Field(()=> Int, {nullable: true})
  primaryFigureImageId?: number
  @Field(()=> Int, {nullable: true})
  previewImageId?: number
  @Field(()=> Int, {nullable: true})
  calendarImageId?: number
  @Field(()=> Int, {nullable: true})
  imageId?: number
}
