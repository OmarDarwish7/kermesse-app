/// <reference types="node" />
import { File } from 'src/file/File';
import { Model } from 'mongoose';
import { FileService } from './file.service';
export declare class FileController {
    private readonly fileModel;
    private readonly fileService;
    constructor(fileModel: Model<File>, fileService: FileService);
    uploadFile(file: any, id2: any): Promise<void>;
    downloadFile(id: any): Promise<{
        filename: string;
        buffer: Buffer;
    }>;
}
