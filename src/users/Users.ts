import * as mongoose from 'mongoose';

export const userSchema = new mongoose.Schema({
    username: {type:String,required:true},
    password: {type:String,required:true},
    mouvement:{type:String,required:true},
    type:{type:String,required:true},
});

export interface User{
    _id:string;
    username:string;
    password:string;
    mouvement:string;
    type:string;
}