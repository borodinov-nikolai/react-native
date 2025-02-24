import { Module } from '@nestjs/common';
import { UserSeriesService } from './user-series.service';
import { UserSeriesResolver } from './user-series.resolver';
import { DbModule } from 'src/db/db.module';

@Module({
  imports: [DbModule],
  providers: [UserSeriesResolver, UserSeriesService],
})
export class UserSeriesModule {}
