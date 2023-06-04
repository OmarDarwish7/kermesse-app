import * as mongoose from 'mongoose';
export declare const mouvementSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any>, any, any>;
export interface Mouvement {
    _id: string;
    name: string;
    printCount: number;
}
