// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class UserService {}

import { UserDocument, User } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
    
    async create(dto: CreateUserDto): Promise<User> {
        const user = new this.userModel(dto);
        return user.save();
    }

    async findByEmail(email: string): Promise<User | null> {
        return this.userModel.findOne({ email });
    }
}

