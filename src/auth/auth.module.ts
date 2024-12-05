import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres', // или другой существующий пользователь
      password: 'root', // пароль для роли
      database: 'nest-course',
      autoLoadModels: true,
      synchronize: true,
    }),
  ],
})
export class AuthModule {}
