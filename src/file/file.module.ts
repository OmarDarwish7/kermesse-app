import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FileService } from './file.service';
//import { fileSchema } from 'src/file/File';
import { FileController } from './file.controller';
import * as mongoose from 'mongoose';


export const fileSchema = new mongoose.Schema({
  id2: {type:String, required:true},
  originalname: { type: String, required: true },
  buffer: { type: Buffer, required: true },
  createdAt: { type: Date, default: Date.now },
});

@Module({
  imports: [MongooseModule.forFeature([{ name: 'File', schema: fileSchema }])],
  controllers: [FileController],
  providers: [FileService],
})
export class FileModule {}
