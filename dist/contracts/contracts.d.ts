import * as mongoose from 'mongoose';
export declare const contractSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any>, any, any>;
export interface Contract {
    _id: string;
    magasin: string;
    mouvement1: string;
    mouvement2: string;
    mouvement3: string;
    mouvement4: string;
    mouvement5: string;
    percentage1: string;
    percentage2: string;
    percentage3: string;
    percentage4: string;
    percentage5: string;
    expiryDate: string;
    hardcopy: string;
}
