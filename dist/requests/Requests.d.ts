import * as mongoose from 'mongoose';
export declare const requestSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any>, any, any>;
export interface Request {
    _id: string;
    Magasin: string;
    Mouvement: string;
    printCount: number;
    printed: string;
    requestor: string;
    Blocked: string;
}
