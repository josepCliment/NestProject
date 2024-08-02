import { Injectable } from '@nestjs/common';
import { UserDTO } from '../dto/user.dto';
// import { UserService } from 'src/entities/user/user.service';
// import { User } from 'src/entities/user/user.entity';

@Injectable()
export class RegisterService {
  // constructor(private readonly userService: UserService) {}
  registerAccount(registerUserDTO: UserDTO): void {
    // return await this.userService.create(
    //   registerUserDTO.email,
    //   registerUserDTO.password,
    // );
  }
}
