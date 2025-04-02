import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  getCats() {
    return ['Cat1', 'Cat2'];
  }
}
