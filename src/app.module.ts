import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { BlogModule } from './blog/blog.module';
import { UserModule } from './user/user.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [AuthModule, BlogModule, UserModule, CommonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
