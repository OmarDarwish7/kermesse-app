import * as mongoose from 'mongoose';

export const contractSchema = new mongoose.Schema({
    magasin: {type:String},
    mouvement1: {type:String},
    mouvement2: {type:String},
    mouvement3: {type:String},
    mouvement4: {type:String},
    mouvement5: {type:String},
    percentage1: {type:String},
    percentage2: {type:String},
    percentage3: {type:String},
    percentage4: {type:String},
    percentage5: {type:String},
    expiryDate: {type:String},
    hardCopy:{type:String,required:false},


});

export interface Contract{
    _id:string;
    magasin: string;
    mouvement1:string;
    mouvement2:string;
    mouvement3:string;
    mouvement4:string;
    mouvement5:string;
    percentage1:string;
    percentage2:string;
    percentage3:string;
    percentage4:string;
    percentage5:string;
    expiryDate:string;
    hardcopy:string;


}