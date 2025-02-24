import { Module } from '@nestjs/common';
import { NftsService } from './nfts.service';
import { NftsResolver } from './nfts.resolver';
import { DbModule } from 'src/db/db.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [DbModule, AuthModule],
  providers: [NftsResolver, NftsService],
})
export class NftsModule {}
