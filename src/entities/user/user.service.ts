import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private UsersRepository: Repository<User>,
  ) {}

  create(email: string, password: string): Promise<User> {
    const user = new User();
    user.email = email;
    user.password = password;
    return this.UsersRepository.save(user);
  }
}
