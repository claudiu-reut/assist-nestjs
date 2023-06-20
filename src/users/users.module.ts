// src/users/users.module.ts
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { User } from './user.entity';
import { UserService } from './users.service';
import { UserPreferences } from 'src/userpreferences/userpreferences.entity';
import { Clubs } from 'src/clubs/club.entity';


@Module({
  imports: [SequelizeModule.forFeature([User]),SequelizeModule.forFeature([UserPreferences]),SequelizeModule.forFeature([Clubs])],
  controllers: [],
  providers: [UserService],
exports:[SequelizeModule]
})
export class UsersModule {}
