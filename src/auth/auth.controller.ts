import { AuthService } from './auth.service';
import { Controller, Post } from '@nestjs/common';
import { Get } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private AuthService: AuthService) {}

  @Get('sighup')
  signup() {
    return this.AuthService.signup();
  }

  @Post('signin')
  signin() {
    return this.AuthService.signin();
  }
}
