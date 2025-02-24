import { Module } from '@nestjs/common';
import { ImagesService } from './images.service';
import { ImagesResolver } from './images.resolver';
import { DbModule } from 'src/db/db.module';
import { UploadModule } from 'src/upload/upload.module';

@Module({
  imports: [DbModule, UploadModule],
  providers: [ImagesResolver, ImagesService],
})
export class ImagesModule {}
