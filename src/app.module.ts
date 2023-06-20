import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './users/user.entity';
import { UsersModule } from './users/users.module';
import { UserController } from './users/users.controller';
import { UserService } from './users/users.service';
import { UserPreferencesController } from './userpreferences/userpreferences.controller';
import { UserPreferencesModule } from './userpreferences/userpreferences.module';
import { UserPreferences } from './userpreferences/userpreferences.entity';
import { UserPreferencesService } from './userpreferences/userpreferences.service';
import { ClubsModule } from './clubs/clubs.module';
import { Clubs } from './clubs/club.entity';
import { ClubsController } from './clubs/clubs.controller';
import { ClubsService } from './clubs/clubs.service';


@Module({
  imports: [ClubsModule,UserPreferencesModule,UsersModule,SequelizeModule.forRoot({ dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'rootuser',
  database: 'TestAssist',
  models: [User,UserPreferences,Clubs],
  autoLoadModels: true,
  synchronize: true,
  omitNull: true})],
  controllers: [UserController,UserPreferencesController],
  providers: [UserService,UserPreferencesService,ClubsService],
})
export class AppModule {}
