import { Module } from '@nestjs/common';
import { NftPageService } from './nft-page.service';
import { NftPageResolver } from './nft-page.resolver';
import { DbModule } from 'src/db/db.module';

@Module({
  imports: [DbModule],
  providers: [NftPageResolver, NftPageService],
})
export class NftPageModule {}
