import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { LoginService } from './login/login.service';

@Module({
  providers: [LoginService],
  controllers: [AuthController],
})
export class AuthModule {}
