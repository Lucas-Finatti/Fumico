import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/users/entities/user.entity';
import { CreateReminderDto } from './dto/create-reminder.dto';
import { UpdateReminderDto } from './dto/update-reminder.dto';
import { Reminder, ReminderDocument } from './entities/reminder.entity'

@Injectable()
export class RemindersService {
  constructor(@InjectModel(Reminder.name) private reminderModel: Model<ReminderDocument>) {}

  create(createReminderDto: CreateReminderDto, userId: string) {
    const reminder = new this.reminderModel(createReminderDto) 
    reminder.user = userId
    return reminder.save();
  }

  findAll(userId: string) {
    return this.reminderModel.find({
      user: userId
    });
  }

  findOne(id: string) {
    return this.reminderModel.findById(id);
  }

  update(id: string, updateReminderDto: UpdateReminderDto) {
    return this.reminderModel.findByIdAndUpdate(
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
    return this.reminderModel.findOneAndDelete({
      _id: id,
    })
    .exec();
  }
}
