import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import * as graphqlUploadExpress  from 'graphql-upload/graphqlUploadExpress.js';

async function bootstrap() {
  const port = process.env.PORT
  const app = await NestFactory.create(AppModule);
  app.enableCors({origin: true, credentials: true})
  app.use(cookieParser())
  app.use(
    '/graphql',
    graphqlUploadExpress({ maxFileSize: 50000000, maxFiles: 10 }),
  )
  await app.listen(port, ()=> console.log(`server started at ${port}`));
}
bootstrap();
