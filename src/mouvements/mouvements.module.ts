import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
//import { mouvementSchema } from 'src/mouvements/Mouvements';
import { MouvementsController } from './mouvements.controller';
import { MouvementsService } from './mouvements.service';
import * as mongoose from 'mongoose';

export const mouvementSchema = new mongoose.Schema({
    name: {type:String,required:true},
    printCount: {type:Number,required:true},
});
@Module({
  imports:[
    MongooseModule.forFeature([{name:'Mouvements',schema:mouvementSchema}])
  ],
  controllers: [MouvementsController],
  providers: [MouvementsService]
})
export class MouvementsModule {}
