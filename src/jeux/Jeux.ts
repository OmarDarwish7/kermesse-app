import * as mongoose from 'mongoose';

export const jeuSchema = new mongoose.Schema({
    name: {type:String,required:true},
    mouvement: {type:String, required:true},
    pdf: {type:String}
});

export interface Jeu{
    _id:string;
    name:string;
    mouvement:string;
    pdf:string;
}