import { Controller ,Put,Headers,Body,Post,Get,Param} from '@nestjs/common';
import { ClubsService } from './clubs.service';


@Controller()
export class ClubsController {
    constructor(private clubsService:ClubsService){
       
    }
    @Post('club')
    createclub(@Headers('X-AUTH-USR') owner,@Body('name') name:string, @Body('address') address:string){
        return this.clubsService.createclub(owner,name,address);
    }
    @Get('club')
    getclubs(@Headers('X-AUTH-USR') owner){
        return this.clubsService.getclubs(owner);
    }
    @Put('club/:id')
    updateclub(@Headers('X-AUTH-USR') owner,@Param('id') id: number,@Body('name') name:string, @Body('address') address:string){
        return this.clubsService.updateclub(owner,id,name,address);
    }
    @Get('club/:id')
    getclub(@Param('id') id: number){
        return this.clubsService.getclub(id);

    }
}
