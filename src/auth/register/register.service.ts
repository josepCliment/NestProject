import { Injectable } from '@nestjs/common';
import { UserService } from 'src/entities/users/user.service';
import { UserDTO } from '../dto/user.dto';
import { User } from 'src/entities/users/user.entity';

@Injectable()
export class RegisterService {
  constructor(
    private readonly userService: UserService,
  ) {}

  /**
   * 
   * @param registerUserDTO - The User structure
   * @returns 
   */
  registerAccount(registerUserDTO: UserDTO): Promise<User> {
    return this.userService.create(
      registerUserDTO.email,
      registerUserDTO.password,
      registerUserDTO.nickname
    );
  }
}
