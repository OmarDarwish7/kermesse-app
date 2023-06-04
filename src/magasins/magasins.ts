import * as mongoose from 'mongoose';

export const magasinSchema = new mongoose.Schema({
    Numero: {type:String},
    Mouvement: {type:String, required:true},
    Magasin: {type:String,required:true},
    Printed: {type:String,required:true},
    Year: {type:String,required:true},
    Blocked:{type:String,required:true}
});

export interface Magasin{
    _id:string;
    Numero:string;
    Magasin:string;
    Mouvement:string;
    Printed:string;
    Year:string;
    Blocked:string;
}