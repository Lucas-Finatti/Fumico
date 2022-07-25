import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './entities/user.entity'

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto) {
    const user = await new this.userModel(createUserDto)
    return user.save();
  }

  findAll() {
    return this.userModel.find();
  }

  async findOne(id: string) {
    return await this.userModel.findById(id);
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.userModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        $set: updateUserDto, 
      },
      {
        new: true,
      }
    )
  }

  async remove(id: string) {
    return await this.userModel.findOneAndDelete({
      _id: id,
    })
    .exec();
   }
  
  async getElementByEmail(email: string) {
    return await this.userModel.findOne({ email }).exec();
  }
}
