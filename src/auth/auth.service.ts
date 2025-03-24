import { Injectable, UnauthorizedException } from '@nestjs/common';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { UserService } from 'src/user/user.service';
import * as bcrypt from "bcrypt";
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {

  constructor (
    private readonly usersService: UserService,
    private readonly jwtService: JwtService
  ){}

  async register(dto: RegisterAuthDto) {
    const hashed = await bcrypt.hash(dto.password, 10);
    const user = await this.usersService.create({
      email: dto.email,
      password: hashed,
      fullName: dto.fullName,
      username: dto.username
    });
    return this._generateToken(user);
  }

  async login(dto: LoginAuthDto) {
    const user = await this.usersService.findByEmail(dto.username);
    if(!user || !(await bcrypt.compare(dto.password, user.password)))
      throw new UnauthorizedException('Invalid credintials')

    return this._generateToken(user);
  } 

  private _generateToken(user: any) {
    const payload = { sub: user._id, email: user.email };
    return {
      access_token: this.jwtService.sign(payload)
    };
  }

}
