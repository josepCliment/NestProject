import { Body, Controller, Get, Post } from '@nestjs/common';
import { LoginService } from './login/login.service';
import { RegisterService } from './register/register.service';
import { UserDTO } from './dto/user.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly loginService: LoginService,
    private readonly registerService: RegisterService,
  ) {}

  @Get('login')
  login(): string {
    return this.loginService.login();
  }

  @Post('register')
  register(@Body() registerUserDTO: UserDTO): void {
    this.registerService
      .registerAccount(registerUserDTO)
     
  }
}
