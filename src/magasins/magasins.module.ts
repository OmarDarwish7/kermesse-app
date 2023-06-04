import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
//import { magasinSchema } from 'src/magasins/magasins';
import { MagasinsController } from './magasins.controller';
import { MagasinsService } from './magasins.service';
import * as mongoose from 'mongoose';

export const magasinSchema = new mongoose.Schema({
    Numero: {type:String},
    Mouvement: {type:String, required:true},
    Magasin: {type:String,required:true},
    Printed: {type:String,required:true},
    Year: {type:String,required:true},
    Blocked:{type:String,required:true}
});
@Module({
  imports:[
    MongooseModule.forFeature([{name:'Magasins',schema:magasinSchema}])
  ],
  controllers: [MagasinsController],
  providers: [MagasinsService]
})
export class MagasinsModule {}
