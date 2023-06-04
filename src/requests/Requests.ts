import * as mongoose from 'mongoose';

export const requestSchema = new mongoose.Schema({
    Mouvement: {type:String,required:true,unique:false},
    Magasin: {type:String, required:true,unique:true},
    printCount: {type:Number,required:true},
    printed:{type:String,required:true},
    requestor:{type:String,required:true},
    Blocked:{type:String,required:true},
    
});

export interface Request{
    _id:string;
    Magasin:string;
    Mouvement:string;
    printCount:number;
    printed:string;
    requestor:string;
    Blocked:string;
}