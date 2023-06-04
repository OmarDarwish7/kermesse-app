import { Document, Schema, model } from 'mongoose';

export interface File {
    _id: string;
    id2:string;
    originalname: string;
    buffer: Buffer;
    createdAt: Date;
  }

export const fileSchema = new Schema({
    id2: {type:String, required:true},
    originalname: { type: String, required: true },
    buffer: { type: Buffer, required: true },
    createdAt: { type: Date, default: Date.now },
});

