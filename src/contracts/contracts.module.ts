import { Module } from '@nestjs/common';
import { ContractsService } from './contracts.service';
//import { contractSchema } from 'src/contracts/contracts';
import { ContractsController } from './contracts.controller';
import { MongooseModule } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

const contractSchema = new mongoose.Schema({
  magasin: {type:String},
  mouvement1: {type:String},
  mouvement2: {type:String},
  mouvement3: {type:String},
  mouvement4: {type:String},
  mouvement5: {type:String},
  percentage1: {type:String},
  percentage2: {type:String},
  percentage3: {type:String},
  percentage4: {type:String},
  percentage5: {type:String},
  expiryDate: {type:String},
  hardCopy:{type:String,required:false},


});

@Module({
  imports:[
    MongooseModule.forFeature([{name:'Contracts',schema:contractSchema}]),
  ],
  controllers: [ContractsController],
  providers: [ContractsService],
})
export class ContractsModule {}



