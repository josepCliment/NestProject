import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { LoginService } from './login/login.service';
import { RegisterService } from './register/register.service';

@Module({
  providers: [LoginService, RegisterService],
  controllers: [AuthController],
})
export class AuthModule {}
