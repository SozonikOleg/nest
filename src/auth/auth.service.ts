import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreteUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcryptjs';
import { User } from '../users/users.model';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(userDto: CreteUserDto) {
    const user = await this.validateUser(userDto);
    return this.generateJWTToken(user);
  }

  async registration(userDto: CreteUserDto) {
    const candidate = await this.usersService.getUserByEmail(userDto.email);
    if (candidate) {
      throw new HttpException(
        'Пользыватель таким email уже сушествует',
        HttpStatus.BAD_REQUEST,
      );
    }

    const hashPassword = await bcrypt.hash(userDto.password, 5);

    const user = await this.usersService.createUser({
      ...userDto,
      password: hashPassword,
    });

    console.log('user', user);

    return this.generateJWTToken(user);
  }

  private async generateJWTToken(user: User) {
    const payload = { email: user.email, id: user.id, roles: user.roles };
    return {
      token: this.jwtService.sign(payload),
    };
  }

  private async validateUser(userDto: CreteUserDto) {
    const user = await this.usersService.getUserByEmail(userDto?.email);
    const passwordIsEqual = await bcrypt.compare(
      userDto?.password,
      user?.password,
    );
    if (passwordIsEqual) {
      return user;
    } else {
      throw new UnauthorizedException({
        message: 'Некорректный email или password',
      });
    }
  }
}
