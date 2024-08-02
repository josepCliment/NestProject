import { HttpException, Injectable } from '@nestjs/common';
import { UserService } from 'src/entities/users/user.service';
import { UserDTO } from '../dto/user.dto';
import { User } from 'src/entities/users/user.entity';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class RegisterService {
  constructor(private readonly userService: UserService) {}

  /**
   *
   * @param registerUserDTO - The User structure
   * @returns
   */
  async registerAccount(registerUserDTO: UserDTO): Promise<boolean> {
   
      const userCreated = await this.userService.create(
        registerUserDTO.email,
        registerUserDTO.password,
        registerUserDTO.nickname,
      ); 
      if (!userCreated) {
        throw new HttpException('User already exists', 400);
      }
      return true;
  }
}
