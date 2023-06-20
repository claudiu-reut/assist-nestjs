import { Controller ,Put,Headers,Body} from '@nestjs/common';
import { UserPreferencesService } from './userpreferences.service';

@Controller()
export class UserPreferencesController {
    constructor(private userPreferencesService:UserPreferencesService){
        
    }
    @Put('update-preferences')
    updatePrefs(@Headers('X-AUTH-USR') id:number,@Body('timezone') timezone:string, @Body('country') country:string){
        return this.userPreferencesService.updatePrefs(id,timezone,country);
    }
}
