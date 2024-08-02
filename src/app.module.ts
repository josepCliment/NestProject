import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CommonModule } from './common/common.module';
import { DatabaseModule } from './common/database/database.module';

@Module({
  imports: [AuthModule, CommonModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
