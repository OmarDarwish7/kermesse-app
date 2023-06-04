import * as mongoose from 'mongoose';

export const testSchema = new mongoose.Schema({
    Magasin: {type:String,required:true},
});

export interface Test{
    _id:string;
    Magasin:string;

}