import { ApiTags } from '@nestjs/swagger';
import { Body, Controller, Post } from '@nestjs/common';
import { CreteUserDto } from 'src/users/dto/create-user.dto';
import { AuthService } from './auth.service';
@ApiTags('Авторизация')
@Controller('/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  login(@Body() userDto: CreteUserDto) {
    return this.authService.login(userDto);
  }

  @Post('/registration')
  registration(@Body() userDto: CreteUserDto) {
    console.log('LOLOL');
    return this.authService.registration(userDto);
  }
}
