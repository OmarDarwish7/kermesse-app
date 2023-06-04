import * as mongoose from 'mongoose';
export declare const magasinSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any>, any, any>;
export interface Magasin {
    _id: string;
    Numero: string;
    Magasin: string;
    Mouvement: string;
    Printed: string;
    Year: string;
    Blocked: string;
}
