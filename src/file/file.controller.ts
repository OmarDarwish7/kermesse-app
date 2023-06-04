import { Controller, Post, UseInterceptors, UploadedFile, Get, Param } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FileInterceptor } from '@nestjs/platform-express';
import { File } from 'src/file/File';
import {Model} from 'mongoose';
import { FileService } from './file.service';
import * as crypto from 'crypto';

@Controller('files')
export class FileController {
  constructor(
    @InjectModel('File') private readonly fileModel: Model<File>,
    private readonly fileService: FileService,
  ) {}

  @Post('upload/:id')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file, @Param() id2:any) {
    const { originalname, buffer } = file;
    const fileModel = await this.fileModel.create({id2:id2.id, originalname, buffer });
    await this.fileService.saveFile(fileModel);
  }

  @Get('download/:id')
  async downloadFile(@Param() id: any) {
    console.log(id);
    const file = await this.fileModel.findOne({id2:id.id});
    const hexBuffer = file.buffer.toString('hex');
    const buf = Buffer.from(hexBuffer, 'hex');
    return {
      filename: file.originalname,
      buffer: buf,
    };
  }
}