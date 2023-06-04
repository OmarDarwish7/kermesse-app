import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
//import { requestSchema } from 'src/requests/Requests';
import { RequestsController } from './requests.controller';
import { RequestsService } from './requests.service';
import * as mongoose from 'mongoose';

export const requestSchema = new mongoose.Schema({
    Mouvement: {type:String,required:true,unique:false},
    Magasin: {type:String, required:true,unique:true},
    printCount: {type:Number,required:true},
    printed:{type:String,required:true},
    requestor:{type:String,required:true},
    Blocked:{type:String,required:true},
    
});
@Module({
  imports:[
    MongooseModule.forFeature([{name:'Request',schema:requestSchema}])
  ],
  controllers: [RequestsController],
  providers: [RequestsService]
})
export class RequestsModule {}
