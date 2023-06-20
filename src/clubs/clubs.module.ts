
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { Clubs } from './club.entity'

import { ClubsService } from './clubs.service';
import { ClubsController } from './clubs.controller';



@Module({
  imports: [SequelizeModule.forFeature([Clubs])],
  controllers: [ClubsController],
  providers: [ClubsService],
  exports:[SequelizeModule]
})
export class ClubsModule {}
