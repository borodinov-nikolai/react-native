import { Module } from '@nestjs/common';
import { DbModule } from './db/db.module';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { ServeStaticModule } from '@nestjs/serve-static';
import { UploadModule } from './upload/upload.module';
import { ImagesModule } from './images/images.module';
import { ProductsModule } from './products/products.module';
import { SeriesModule } from './series/series.module';
import { NftsModule } from './nfts/nfts.module';
import { UserSeriesModule } from './user-series/user-series.module';
import { UserNftModule } from './user-nft/user-nft.module';
import { NftPageModule } from './nft-page/nft-page.module';
import { CartModule } from './cart/cart.module';

const rootPath = process.cwd()


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      installSubscriptionHandlers: true,
      sortSchema: true,
      context: ({ req, res }) => ({ req, res }), 
    }),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET
    }),
    ServeStaticModule.forRoot({
      rootPath: join(rootPath, 'files'),
      exclude: ['/graphql/(.*)']
    }),
    DbModule,
    AuthModule,
    UsersModule,
    UploadModule,
    ImagesModule,
    ProductsModule,
    SeriesModule,
    NftsModule,
    UserSeriesModule,
    UserNftModule,
    NftPageModule,
    CartModule
  ]
})
export class AppModule {}
