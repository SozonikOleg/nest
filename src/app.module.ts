import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { UsersModule } from './users/users.module';
// import { ConfigModule } from '@nestjs/config';

import { RolesModule } from './roles/roles.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './users/users.model';
import { UserRoles } from './roles/user-roles.model';
import { Role } from './roles/roles.model';

@Module({
  controllers: [],
  providers: [],
  // imports: [
  //   // ConfigModule.forRoot({
  //   //   envFilePath: '.env',
  //   // }),
  //   AuthModule,
  //   BookmarkModule,
  //   UsersModule,
  //   RolesModule,
  // ],
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'postgres',
      port: 5432,
      username: 'postgres', // или другой существующий пользователь
      password: '123', // пароль для роли
      database: 'nest',
      models: [User, UserRoles, Role],
      autoLoadModels: true,
      synchronize: true,
    }),
    AuthModule,
    BookmarkModule,
    UsersModule,
    RolesModule,
  ],
})
export class AppModule {}
