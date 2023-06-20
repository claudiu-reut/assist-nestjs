
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from '../users/user.entity';

@Table
export class UserPreferences extends Model {
    @Column({type:DataType.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    }
        )
        id: Number;
  @Column({
    type: DataType.STRING,
   
  })
  timezone: string;

  @Column({
    type: DataType.TEXT,
  
  })
  country: string;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User)
  user: User;
}
