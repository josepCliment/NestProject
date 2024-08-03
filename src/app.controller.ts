import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';
import { Public } from './decorators/public-routes/public-routes.decorator';

@Controller()
export class AppController {
  constructor() {}

  @ApiBearerAuth()
  @Get()
  getHello(): string {
    return 'Hello World!';
  }
}
