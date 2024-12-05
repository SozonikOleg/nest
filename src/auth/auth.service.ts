import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class AuthService {
  constructor(private sequelize: Sequelize) {}

  getUsers() {
    return { id: 23424, name: 'Oleg' };
  }

  signin() {
    return { msg: 'Hello, I have signin' };
  }
}
