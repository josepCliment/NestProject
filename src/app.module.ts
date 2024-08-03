import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { CommonModule } from './common/common.module';
import { DatabaseModule } from './common/database/database.module';
import { APP_GUARD, APP_PIPE } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { JwtStrategy } from './auth/guards/jwt.strategy';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';

//CommonModule, AuthModule

@Module({
  imports: [CommonModule, AuthModule],
  controllers: [AppController],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    JwtStrategy
  ],
})
export class AppModule {}
