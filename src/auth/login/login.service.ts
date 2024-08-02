import { Catch, Injectable, NotFoundException } from '@nestjs/common';
import { LoginUserDTO } from '../dto/loginUser.dto';
import { UserService } from 'src/entities/users/user.service';
import * as bcrypt from 'bcrypt';
import { RpcException } from '@nestjs/microservices';
import { JwtService } from '@nestjs/jwt';
import { AllExceptionFilter } from 'src/all-exception-filter/all-exception-filter.filter';


@Injectable()
export class LoginService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  /**
   *
   * @param userData - The DTO to the Login request
   * @returns
   */
  
  async login(userData: LoginUserDTO): Promise<{ access_token: string }> {
    let user = await this.userService.findByEmail(userData.email);

    if (!user) {
      throw new RpcException('Invalid crendentials.');
    }
    //check password
    const isValidPassword = await bcrypt.compare(
      userData.password,
      user.password,
    );

    if (!isValidPassword) {
      throw new RpcException('Invalid crendentials.');
    }

    //Generate JST Token
    const payload = { sub: user.id, nickname: user.nickname };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
