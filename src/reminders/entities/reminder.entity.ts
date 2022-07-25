import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, Document } from 'mongoose';
import { User } from '../../users/entities/user.entity'

export type ReminderDocument = Reminder & Document;

@Schema()
export class Reminder {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  status: string;
  
  @Prop()
  user: string;
  
  @Prop()
  created_at: string;
  
  @Prop()
  updated_at: string;
}

export const ReminderSchema = SchemaFactory.createForClass(Reminder);