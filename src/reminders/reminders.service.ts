import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateReminderDto } from './dto/create-reminder.dto';
import { UpdateReminderDto } from './dto/update-reminder.dto';
import { Reminder, ReminderDocument } from './entities/reminder.entity'

@Injectable()
export class RemindersService {
  constructor(@InjectModel(Reminder.name) private userModel: Model<ReminderDocument>) {}

  create(createReminderDto: CreateReminderDto) {
    const reminder = new this.userModel(createReminderDto) 
    return reminder.save();
  }

  findAll() {
    return this.userModel.find();
  }

  findOne(id: string) {
    return this.userModel.findById(id);
  }

  update(id: string, updateReminderDto: UpdateReminderDto) {
    return this.userModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        $set: updateReminderDto, 
      },
      {
        new: true,
      }
    )
  }

  remove(id: string) {
    return this.userModel.findOneAndDelete({
      _id: id,
    })
    .exec();
  }
}
