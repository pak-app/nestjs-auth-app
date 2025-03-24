import { IsEmail, isString, IsString, MinLength } from "class-validator";

export class RegisterAuthDto {
    
    @IsEmail()
    email:string;

    @IsString()
    username: string;
    
    @IsString()
    @MinLength(8)
    password: string;
    
    @IsString()
    fullName: string;
}
