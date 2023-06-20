import { Module } from '@nestjs/common';
import { UserPreferencesService } from './userpreferences.service';
import { UserPreferencesController } from './userpreferences.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserPreferences } from './userpreferences.entity';


@Module({
  imports: [SequelizeModule.forFeature([UserPreferences])],
  providers: [UserPreferencesService],
  controllers: [UserPreferencesController],
  exports:[SequelizeModule]
})
export class UserPreferencesModule {}
