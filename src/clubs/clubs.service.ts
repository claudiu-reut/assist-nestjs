import { Injectable,ForbiddenException} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Clubs } from './club.entity';
import { log } from 'console';
@Injectable()
export class ClubsService {
    constructor(
        @InjectModel(Clubs)
        private clubsModel: typeof Clubs
    ){}
    async createclub(owner:number,address:string,name:string){
        try{
            if(owner)
            {const createdclub=this.clubsModel.create({owner,address,name});
            return createdclub;}
            else
            return new ForbiddenException('X-AUTH-USR must be present in order to create club');
        }catch(err){return new ForbiddenException(err)}
    }
    getclubs(owner:number){
        
        const clubs = this.clubsModel.findAll();
        if(owner)
        return clubs;
        else
        return new ForbiddenException('X-AUTH-USR must be present in order to create club');
    }
    async updateclub(owner:number,id:number,name:string,address:string)
    {   try{
        const updatedClub = await this.clubsModel.update({id,name,address,owner},{where:{id}});
        
        
            if(updatedClub[0]==1)
            return {"status":"ok",owner,name,address};
            else
            return {"status":"error: club not found"};
    }catch(err){return new ForbiddenException(err)}
    }
    async getclub(id:number){
        
        const club = this.clubsModel.findByPk(id);
        
        return club;
       
    }

}
