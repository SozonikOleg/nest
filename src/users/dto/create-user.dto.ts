import { ApiProperty } from '@nestjs/swagger';

export class CreteUserDto {
  @ApiProperty({ example: 'user@gmail.com', description: 'Почтовый ящик' })
  readonly email: string;

  @ApiProperty({ example: '123456', description: 'Пароль' })
  readonly password: string;
}
