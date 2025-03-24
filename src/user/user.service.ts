// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class UserService {}

import { UserDocument, User } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
    
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
    
    async create(dto: CreateUserDto): Promise<User> {
        const user = new this.userModel(dto);
        
        try {
            return await user.save();
        }
        catch (err) {
            if(err.code === 11000) {
                const field = Object.keys(err.keyPattern)[0];
                throw new ConflictException(`The ${field} already exists.`)
            }
            return err;
        }
    }

    // This means it finds a user by email or username
    async findByIdentifier(identifier: string): Promise<User | null> {
        
        if (this.isEmail(identifier))
            return this.userModel.findOne({ email: identifier });
        else 
            return this.userModel.findOne({ username: identifier })
    }

    private isEmail(value: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
    }
}

