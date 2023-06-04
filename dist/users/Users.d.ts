import * as mongoose from 'mongoose';
export declare const userSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any>, any, any>;
export interface User {
    _id: string;
    username: string;
    password: string;
    mouvement: string;
    type: string;
}
