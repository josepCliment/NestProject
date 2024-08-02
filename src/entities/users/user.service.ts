import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { User } from './user.entity';


@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private UsersRepository: Repository<User>,
  ) {}

  //Create a new user in the database
  async create(
    email: string,
    password: string,
    nickname: string,
  ): Promise<User> {
    const user = new User();
    user.email = email;
    user.nickname = nickname;

    //encrypt password
    const salt = await bcrypt.genSalt();
    user.password = await bcrypt.hash(password, salt);

    return this.UsersRepository.save(user);
  }

  //Find the user by email
  async findByEmail(email: string): Promise<User> {
    return await this.UsersRepository.findOne({
      where: {
        email: email,
      },
    });
  }
}
