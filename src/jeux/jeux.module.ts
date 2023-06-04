import { Module } from '@nestjs/common';
import { JeuxService } from './jeux.service';
import { JeuxController } from './jeux.controller';
import { MongooseModule } from '@nestjs/mongoose';
//import { jeuSchema } from 'src/jeux/Jeux';
import * as mongoose from 'mongoose';

export const jeuSchema = new mongoose.Schema({
  name: {type:String,required:true},
  mouvement: {type:String, required:true},
  pdf: {type:String}
});

@Module({
  imports:[
    MongooseModule.forFeature([{name:'Jeux',schema:jeuSchema}]),
  ],
  controllers: [JeuxController],
  providers: [JeuxService],
})
export class JeuxModule {}
