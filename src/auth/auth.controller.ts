import {
  Body,
  Catch,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { CreateUserDTO } from './dto/createUser.dto';
import { LoginUserDTO } from './dto/loginUser.dto';
import { LoginService } from './login/login.service';
import { RegisterService } from './register/register.service';
import { RpcException } from '@nestjs/microservices';
import { User } from 'src/entities/users/user.entity';

@Catch()
@Controller('auth')
export class AuthController {
  constructor(
    private readonly loginService: LoginService,
    private readonly registerService: RegisterService,
  ) {}

  /**
   *  Login function
   * @param loginUserDTO - The user login props
   */
  @Post('login')
  login(
    @Body() loginUserDTO: LoginUserDTO,
  ): Promise<boolean | { access_token: string }> {
    return this.loginService.login(loginUserDTO);
  }

  /**
   * Register function
   * @param registerUserDTO - User register props
   */

  @Post('register')
  register(@Body() registerUserDTO: CreateUserDTO): Promise<boolean> {
    return this.registerService.registerAccount(registerUserDTO);
  }
}
