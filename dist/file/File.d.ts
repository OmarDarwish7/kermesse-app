/// <reference types="node" />
/// <reference types="mongoose/types/pipelinestage" />
import { Schema } from 'mongoose';
export interface File {
    _id: string;
    id2: string;
    originalname: string;
    buffer: Buffer;
    createdAt: Date;
}
export declare const fileSchema: Schema<any, import("mongoose").Model<any, any, any, any>, any, any>;
