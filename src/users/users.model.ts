import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { Role } from 'src/roles/roles.model';
import { UserRoles } from 'src/roles/user-roles.model';

interface UserCreationAttrs {
  email: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Уникальный индитефикатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'user@gmail.com', description: 'Почтовый ящик' })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: true,
  })
  email: string;

  @ApiProperty({ example: '12343443', description: 'Пароль' })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  password: string;

  @ApiProperty({ example: 'false', description: 'Статус бан' })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  banned: boolean;

  @ApiProperty({ example: 'false', description: 'Причина бана' })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  banReason: boolean;

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[];
}
