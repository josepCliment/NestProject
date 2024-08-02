import { HttpException, Injectable } from '@nestjs/common';
import { LoginUserDTO } from '../dto/loginUser.dto';
import { UserService } from 'src/entities/users/user.service';
import * as bcrypt from 'bcrypt';
import { RpcException } from '@nestjs/microservices';
import { JwtService } from '@nestjs/jwt';

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
      throw new HttpException('Invalid crendentials.', 401);
    }
    //check password
    const isValidPassword = await bcrypt.compare(
      userData.password,
      user.password,
    );

    if (!isValidPassword) {
      throw new HttpException('Invalid crendentials.', 401);
    }

    //Generate JST Token
    const payload = { sub: user.id, nickname: user.nickname };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
