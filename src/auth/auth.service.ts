import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreteUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(userDto: CreteUserDto) {}

  async registration(userDto: CreteUserDto) {}
}
