import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateNftPageInput {
  @Field({nullable: true})
  description?: string
  @Field({nullable: true})
  standartSetQuantity?: number
  @Field({nullable: true})
  premiumSetQuantity?: number
  @Field({nullable: true})
  standartSetDescription?: string
  @Field({nullable: true})
  premiumSetDescription?: string
  @Field({nullable: true})
  standartSetPrice?: number
  @Field({nullable: true})
  premiumSetPrice?: number
  @Field({nullable: true})
  standartSetStock?: number
  @Field({nullable: true})
  premiumSetStock?: number
  @Field({nullable: true})
  standartSetCatalogPreviewId?: number
  @Field({nullable: true})
  premiumSetCatalogPreviewId?: number
  @Field({nullable: true})
  newReleasePreviewId?: number
  @Field(()=> Date,{nullable: true})
  timer?: Date
  @Field({nullable: true})
  standartSetId?: number
  @Field({nullable: true})
  premiumSetId?: number
}
