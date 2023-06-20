import {
    ForbiddenException,
    Injectable,
} from '@nestjs/common';;
import { InjectModel } from '@nestjs/sequelize';
import { UserPreferences } from './userpreferences.entity';
@Injectable()
export class UserPreferencesService {
    constructor(@InjectModel(UserPreferences)
    private userPreferencesModel: typeof UserPreferences) { }
    async updatePrefs(userId: number, timezone: string, country: string) {
        try {
            if (userId) {
                const updatedPrefs = await this.userPreferencesModel.update({ timezone, country }, { where: { userId } });
                console.log(updatedPrefs);
                
                if(updatedPrefs[0]==1)
                return { "status": "preferences updated", timezone, country }
                else
                return { "status": " Error: user not found" } 
            }
            else { return { "status": " Error: X-AUTH-USR header must be present" } }

        } catch (err) { return new ForbiddenException(err) }
    }
}
