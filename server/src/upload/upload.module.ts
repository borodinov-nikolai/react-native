import { Module } from '@nestjs/common';
import { UploadService } from './upload.service';
import { UploadResolver } from './upload.resolver';
import { DbModule } from 'src/db/db.module';
import { UsersModule } from 'src/users/users.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [DbModule, UsersModule, AuthModule],
  providers: [UploadResolver, UploadService],
  exports: [UploadService]
})
export class UploadModule {}
 