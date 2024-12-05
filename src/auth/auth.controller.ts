import { AuthService } from './auth.service';
import { Controller, Post } from '@nestjs/common';
import { Get } from '@nestjs/common';

@Controller('/auth')
export class AuthController {
  // Добавляем зависимлсть
  constructor(private AuthService: AuthService) {}

  @Get('/sighup')
  signup() {
    return this.AuthService.getUsers();
  }

  @Get('/sign')
  signin() {
    return this.AuthService.signin();
  }
}
