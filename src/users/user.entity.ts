

import {  Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { UserPreferences } from 'src/userpreferences/userpreferences.entity';
import { Clubs } from 'src/clubs/club.entity';
@Table
export class User extends Model {
    @Column({type:DataType.INTEGER,
        primaryKey:true,
       autoIncrement:true,
    }
        )
        id: Number;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique:true
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull:false,

  })
  passwordHash:string;
  @HasMany(() => UserPreferences )
  userpreferences: UserPreferences [];
  @HasMany(() => Clubs )
  clubs: Clubs [];

}
