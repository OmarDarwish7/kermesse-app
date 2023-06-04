import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Mouvement } from 'src/mouvements/Mouvements';
import {Model} from 'mongoose';
@Injectable()
export class MouvementsService {
    constructor(
        @InjectModel('Mouvements')private readonly mouvementModel: Model<Mouvement>,
    ){}

    async getAllMouvements(){
        try {
            const mouvements = await this.mouvementModel.find();
            return mouvements;
        } catch (error) {
            return {message: error.message};
        }
    }

    async getMouvement(mouvement:string){
        try {
            const result = await this.mouvementModel.findOne({name:mouvement});
            return result;
        } catch (error) {
            return {message:error.message};
        }
    }

    async addMouvement(mouvement:any){
        try {
            const newMouv = new this.mouvementModel(mouvement);
            const result = await newMouv.save();
            return result;
        } catch (error) {
            return {message:error.message};
        }
    }

    async addPrint(mouvement:string){
        try{
        const mouv = await this.mouvementModel.find({name:mouvement});
        const mouv1 = mouv[0];
        mouv1.printCount = mouv1.printCount +1;
        await this.mouvementModel.findByIdAndUpdate(mouv1._id,mouv1);
        return mouv1.printCount;
        }
        catch(error){
            return {message: error.message};
        }
        
    }

    async deleteMouvement(objects:any){
        try {
            for(var object of objects){
                await this.mouvementModel.findByIdAndDelete(object._id);
            }
            
            return {message:"done"};
        } catch (error) {
            return {message: error.message};
        }
    }

    async ResetPrintCount(){
        try {
            const mouvements = await this.mouvementModel.find();
            for(var mouvement of mouvements){
                mouvement.printCount = 0;
                await this.mouvementModel.findByIdAndUpdate(mouvement._id,mouvement);
            }
            return "success";

        } catch (error) {
            return {message:error.message}
        }
    }
}
