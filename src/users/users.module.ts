import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
//import { userSchema } from 'src/users/Users';
import * as mongoose from 'mongoose';

export const userSchema = new mongoose.Schema({
    username: {type:String,required:true},
    password: {type:String,required:true},
    mouvement:{type:String,required:true},
    type:{type:String,required:true},
});
@Module({
  imports:[
    MongooseModule.forFeature([{name:'Users',schema:userSchema}]),
  ],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
