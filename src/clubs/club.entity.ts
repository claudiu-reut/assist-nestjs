// src/notes/note.entity.ts
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from '../users/user.entity';

@Table
export class Clubs extends Model {
    @Column({type:DataType.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    }
        )
        id: Number;
  @Column({
    type: DataType.STRING,
   
  })
  name: string;

  @Column({
    type: DataType.TEXT,
  
  })
 address: string;

  @ForeignKey(() => User)
  @Column
  owner: number;

  @BelongsTo(() => User)
  user: User;
}
