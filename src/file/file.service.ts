import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { fileSchema, File } from 'src/file/File';
import { Model } from 'mongoose';


@Injectable()
export class FileService {
  constructor(@InjectModel('File') private readonly fileModel: Model<File>) {}

  async saveFile(file: File): Promise<File> {
    const newFile = new this.fileModel(file);
    return await newFile.save();
  }

  async getFiles(): Promise<File[]> {
    return await this.fileModel.find().exec();
  }

  async getFile(id: string): Promise<File> {
    return await this.fileModel.findById(id).exec();
  }
}