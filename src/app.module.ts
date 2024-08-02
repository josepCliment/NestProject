import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { CommonModule } from './common/common.module';
import { DatabaseModule } from './common/database/database.module';
import { APP_PIPE } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';

//CommonModule, AuthModule

@Module({
  imports: [CommonModule, AuthModule],
  controllers: [AppController],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}
