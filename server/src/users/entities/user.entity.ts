import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql';
import { Role } from '@prisma/client';
import GraphQLJSON from 'graphql-type-json';
import { UserNft } from 'src/user-nft/entities/user-nft.entity';
import { UserSery } from 'src/user-series/entities/user-sery.entity';


registerEnumType(Role, {
  name: 'Role'
})

@ObjectType()
export class User {
  @Field(()=> Int)
  id: number
  @Field()
  login: string
  @Field()
  password: string
  @Field({nullable: true})
  email?: string
  @Field({nullable: true})
  social?: string
  @Field({nullable: true})
  firstName?: string
  @Field({nullable: true})
  secondName?: string
  @Field({nullable: true})
  phone?: string
  @Field({nullable: true})
  country?: string
  @Field({nullable: true})
  city?: string
  @Field({nullable: true})
  street?: string
  @Field({nullable: true})
  house?: string
  @Field({nullable: true})
  building?: string
  @Field({nullable: true})
  entrance?: string
  @Field({nullable: true})
  floor?: string
  @Field({nullable: true})
  apartment?: string
  @Field({nullable: true})
  intercom?: string
  @Field(()=> Role, {nullable: true})
  role?: Role
  @Field(()=> GraphQLJSON, {nullable: true})
  cart?: any
  @Field(()=> [UserSery!], {nullable: true})
  userSeries?: UserSery[]
  @Field(()=> [UserNft!], {nullable: true})
  userNfts?: UserNft[]
}
