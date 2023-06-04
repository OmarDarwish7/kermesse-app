import * as mongoose from 'mongoose';

export const mouvementSchema = new mongoose.Schema({
    name: {type:String,required:true},
    printCount: {type:Number,required:true},
});

export interface Mouvement{
    _id:string;
    name:string;
    printCount:number;
}