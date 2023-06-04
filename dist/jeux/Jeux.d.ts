import * as mongoose from 'mongoose';
export declare const jeuSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any>, any, any>;
export interface Jeu {
    _id: string;
    name: string;
    mouvement: string;
    pdf: string;
}
