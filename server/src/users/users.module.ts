import { forwardRef, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { DbModule } from 'src/db/db.module';
import { AuthModule } from 'src/auth/auth.module';


@Module({
  imports: [DbModule, forwardRef(()=> AuthModule)],
  providers: [UsersResolver, UsersService],
  exports: [UsersService]
})
export class UsersModule {}
