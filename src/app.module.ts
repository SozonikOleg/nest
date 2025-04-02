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
import { CatsModule } from './cats/cats.module';

@Module({
  controllers: [],
  providers: [],
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost', //'postgres' for docker
      port: 5432,
      username: 'postgres', // или другой существующий пользователь
      password: '123', // пароль для роли
      database: 'nest-course', //nest for docker
      models: [User, UserRoles, Role],
      autoLoadModels: true,
      synchronize: true,
    }),
    AuthModule,
    BookmarkModule,
    UsersModule,
    RolesModule,
    CatsModule,
  ],
})
export class AppModule {}
