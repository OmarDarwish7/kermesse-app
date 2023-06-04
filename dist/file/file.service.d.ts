import { File } from 'src/file/File';
import { Model } from 'mongoose';
export declare class FileService {
    private readonly fileModel;
    constructor(fileModel: Model<File>);
    saveFile(file: File): Promise<File>;
    getFiles(): Promise<File[]>;
    getFile(id: string): Promise<File>;
}
