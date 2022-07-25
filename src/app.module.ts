import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { RemindersModule } from './reminders/reminders.module';

@Module({
  imports: [
    AuthModule, 
    MongooseModule.forRoot('mongodb+srv://Lucas:123qweasd@cluster0.9v1cp.mongodb.net/?retryWrites=true&w=majority'), 
    UsersModule, 
    RemindersModule,
    
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
