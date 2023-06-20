import {
    ForbiddenException,
    Injectable,
} from '@nestjs/common';
import { User } from '../users/user.entity'
import { UserPreferences } from 'src/userpreferences/userpreferences.entity';
import { InjectModel } from '@nestjs/sequelize';
import * as argon from 'argon2'
function generatePassword() {
    let password = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < 8; i++) { // For first 8 characters
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    for (let i = 0; i < 4; i++) { // For last 4 characters
        password += Math.floor(Math.random() * 10); // numbers 0-9
    }
    return password;
}
@Injectable()
export class UserService {
    constructor(
        @InjectModel(User)
        private userModel: typeof User,
        @InjectModel(UserPreferences)
        private userPreferencesModel: typeof UserPreferences

    ) { }
    async signup(name: string, email: string, password: string) {
        try {
            const hash = await argon.hash(password);


            const created = await this.userModel.create({ name: name, email: email, passwordHash: hash });
            const newPrefs = await this.userPreferencesModel.create({ userId: created.id });
            created.passwordHash = undefined;
            return created;
        } catch (err) {
            console.log(err);
            return new ForbiddenException(err);
        };
    }
    async resetpass(email: string) {
        try {
            const newPass = generatePassword();
            const hash = await argon.hash(newPass);
            console.log(hash);

            const updatedUser = await this.userModel.update({ passwordHash: hash }, { where: { email } });
            if(updatedUser[0]==1)
            return { "new-password": newPass }
            else
            return{"status":"error: user not found"};

        } catch (err) { return new ForbiddenException(err); }
    }
}