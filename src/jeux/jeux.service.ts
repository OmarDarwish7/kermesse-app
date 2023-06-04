import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Jeu } from 'src/jeux/Jeux';
import { Model } from 'mongoose';

@Injectable()
export class JeuxService {

    constructor(
        @InjectModel('Jeux')private readonly jeuModel: Model<Jeu>,
    ){}

    async getAllJeux(){
        try {
            const jeux = await this.jeuModel.find();
            return jeux;
        } catch (error) {
            return {message:error.message}
        }
    }

    async getMouvementJeux(mouvement:string){
        try {
            const jeux = this.jeuModel.find({mouvement:mouvement});
            return jeux;
        } catch (error) {
            return {message:error.message};
        }
    }

    async searchByName(name:string){
        name = name.toLowerCase();
        try {
            var allJeux = await this.jeuModel.find();
            for(let i = 0;i<allJeux.length;i++){
                if(this.getSameCount(name,allJeux[i].name.toLowerCase())<0.8*name.length){
                    allJeux.splice(i,1);
                    i--;
                }            
            }
            return allJeux;

        } catch (error) {
            return {message:error.message};
        }
    }

    async addJeu(jeu:any){
        try {
            const newJeu = new this.jeuModel(jeu);
            const result = await newJeu.save();
            return result;
        } catch (error) {
            return {message:error.message};
        }
    }

    async deleteJeux(objects:any){
        try {
            for(var object of objects){
                await this.jeuModel.findByIdAndDelete(object._id);
            }
            return {message:'success'};
        } catch (error) {
            return {message:error.message};
        }
    }

    getSameCount(str1:string, str2:string) {
        let count = 0;
        const obj = str2.split("");
        for(let str of str1){
          let idx = obj.findIndex(s => s === str);
          if(idx >= 0){
            count++;
            obj.splice(idx, 1);
          }
        }
        return count;
      }
}
