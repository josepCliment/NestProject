import { Controller, Get, Post } from '@nestjs/common';
import { LoginService } from './login/login.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly loginService: LoginService,
  ) {}

  @Get('login')
  login(): string {
    return this.loginService.login();
  }
}
