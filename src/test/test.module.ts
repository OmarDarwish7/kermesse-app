import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
//import { testSchema } from 'src/test/Test';
import { TestController } from './test.controller';
import { TestService } from './test.service';
import * as mongoose from 'mongoose';

export const testSchema = new mongoose.Schema({
    Magasin: {type:String,required:true},
});

@Module({
  imports:[
    MongooseModule.forFeature([{name:'Testing',schema:testSchema}]),
  ],
  controllers: [TestController],
  providers: [TestService],
})
export class TestModule {}
