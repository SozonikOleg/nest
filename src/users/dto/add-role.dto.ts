import { ApiProperty } from '@nestjs/swagger';

export class AddRoleDto {
  @ApiProperty({ example: 'ADMIN', description: 'Выдать роль' })
  readonly role: string;

  @ApiProperty({ example: 0, description: 'Выдать роль' })
  readonly userId: string;
}
