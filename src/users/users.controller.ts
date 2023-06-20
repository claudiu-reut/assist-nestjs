import { Body, Controller, Post, Put, Req ,Headers, Param } from "@nestjs/common";
import { Get } from "@nestjs/common/decorators/http/request-mapping.decorator";
import { time } from "console";
import { UserService } from "./users.service";
@Controller()
export class UserController{
    constructor(private authService:UserService){
        
    }

    @Post('sign-up')
    signup(@Body('name') name:string,@Body('email') email:string,@Body('password') password:string){
     
      
        return this.authService.signup(name,email,password);
     }
    @Put('reset-password')
    resetpass(@Body('email') email:string){
        return this.authService.resetpass(email);
    }
}

