import { Module } from '@nestjs/common';
import { UserNftService } from './user-nft.service';
import { UserNftResolver } from './user-nft.resolver';
import { DbModule } from 'src/db/db.module';

@Module({
  imports: [DbModule],
  providers: [UserNftResolver, UserNftService],
})
export class UserNftModule {}
