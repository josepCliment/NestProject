import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor() {}

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get()
  getHello(): string {
    return 'Hello World!';
  }
}
