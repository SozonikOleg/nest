import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signup() {
    return { msg: 'Hello, I have signup' };
  }

  signin() {
    return { msg: 'Hello, I have signin' };
  }
}
