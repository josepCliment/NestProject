import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/users/user.entity';
import { UserService } from 'src/entities/users/user.service';
import { AuthController } from './auth.controller';
import { LoginService } from './login/login.service';
import { RegisterService } from './register/register.service';

@Module({
  providers: [LoginService, RegisterService, UserService],
  controllers: [AuthController],
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      global: true,
      secret: process.env.SECRET || "pepe",
      signOptions: { expiresIn: '60s' },
    }),
  ],
})
export class AuthModule {}
 