import { Injectable } from '@nestjs/common';
import { Magasin } from 'src/magasins/magasins';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class MagasinsService {
    constructor(
        @InjectModel('Magasins')private readonly magasinModel: Model<Magasin>,
    ){}
    async getAllMagasins(){
        try {
            const magasins = await this.magasinModel.find();
            return magasins;
        } catch (error) {
            return {message: error.message};
        }
    }

    async getMouvementMagasins(mouvement:any){
        var nom = mouvement.name;
        try {
            const magasins = await this.magasinModel.find({Mouvement:nom});
            return magasins;
        } catch (error) {                                                                                                                                                              
            return {message:error.message};
        }
    }

    async searchByName(name:string){
        name = name.toLowerCase();
        var toBeReturned = [];
        try {
            var allmagasins = await this.magasinModel.find();
            for(let i = 0;i<allmagasins.length;i++){
                if(allmagasins[i].Magasin != undefined){
                    const split = allmagasins[i].Magasin.split(" ");
                    const wordSplit : string[] = name.split(" ");
                    var count = 0;
                    loop : for(const substring1 of wordSplit){
                        for(const substring of split){
                            if(this.getSameCount(substring1,substring.toLowerCase())>=substring1.length*0.95){
                                count++;
                            } 
                        }
                    }
                    if(count >= wordSplit.length*0.7){
                        toBeReturned.push(allmagasins[i]);
                    }

                     
                    // if(this.calculateLevenshteinDistance(name,allmagasins[i].Magasin.toLowerCase()) > Math.max(name.length,allmagasins[i].Magasin.length)*0.34){
                    //     allmagasins.splice(i,1);
                    //     i--;
                    // }       
                }
                // else{
                //     allmagasins.splice(i,1);
                //     i--; 
                // }
                
                     
            }
            return toBeReturned;

        } catch (error) {
            return {message:error.message};
        }
    }

    async Printed(id:string){
        try {
            const magasin = await this.magasinModel.findOne({_id:id});
            magasin.Printed = "Yes";
            await this.magasinModel.findByIdAndUpdate(id,magasin);
            return magasin;
        } catch (error) {
            return {message: error.message};
        }
    }

    async Printed2(mag:string){
        try {
            const magasin = await this.magasinModel.findOne({Magasin:mag});
            magasin.Printed = "Yes";
            await this.magasinModel.findByIdAndUpdate(magasin._id,magasin);
            return magasin;
        } catch (error) {
            return {message: error.message};
        }
    }

    async getMouvements(){
        try {
            const mouvements = await this.magasinModel.distinct("Mouvement");
            return mouvements;
        } catch (error) {
            return {mesage:error.message};
        }
    }

    async addMagasin(magasin:Magasin){
        try {
            console.log(magasin);
            const allMagasins = await this.magasinModel.find();
            for(const mag of allMagasins){
                if(mag.Magasin == magasin.Magasin){
                    return {message:"Already Exists"};
                }
            }
            const newMagasin = new this.magasinModel(magasin);
            const result = await newMagasin.save();
            return result;
        } catch (error) {
            return {message:error.message};
        }
    }

    async updateMagasin(magasin:Magasin){
        try {
            const result = await this.magasinModel.findByIdAndUpdate(magasin._id,magasin);
            return result;
        } catch (error) {
            return {message:error.message};
        }
    }

    async renameMagasin(object:any){
        const oldname = object.oldname;
        const newname = object.newname;
        const year = object.Year;
        const blocked = object.Blocked;
        try {
            var magasin = await this.magasinModel.findOne({Magasin:oldname});
            if(magasin!=null){
                if(newname!=""){
                    magasin.Magasin = newname;
                }
                if(year!=""){
                    magasin.Year = year;
                }
                if(blocked!=""){
                    magasin.Blocked = blocked;
                }
                await this.magasinModel.findByIdAndUpdate(magasin._id,magasin);
                return {message: "200"};
            }
            else{
                return {message:"404"};
            }
        } catch (error) {
            return {message:"400"};
        }
    }

    async deleteMagasin(objects:any){
        try {
            for(var object of objects){
                await this.magasinModel.findByIdAndDelete(object._id);
            }
            
            return {message:"done"};
        } catch (error) {
            return {message: error.message};
        }
    }

    async setPrinted(){
        const magasins = await this.magasinModel.find();
        for(let magasin of magasins){
            magasin.Printed = "No";
            await this.magasinModel.findByIdAndUpdate(magasin._id,magasin);
        }

    }

    async setBlocked(){
        console.log("in");
        const magasins = await this.magasinModel.find();
        for(let magasin of magasins){
            magasin.Blocked = "No";
            await this.magasinModel.findByIdAndUpdate(magasin._id,magasin);
        }
    }

    async deleteByMouvement(mouvement:string){
        console.log(mouvement);
        const magasins = await this.magasinModel.find({Mouvement:mouvement});
        for(let magasin of magasins){
            await this.magasinModel.findByIdAndDelete(magasin._id);
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

      calculateLevenshteinDistance(a:string, b:string){
        const c = a.length + 1;
        const d = b.length + 1;
        const r = Array(c);
        for (let i = 0; i < c; ++i) r[i] = Array(d);
        for (let i = 0; i < c; ++i) r[i][0] = i;
        for (let j = 0; j < d; ++j) r[0][j] = j;
        for (let i = 1; i < c; ++i) {
          for (let j = 1; j < d; ++j) {
              const s = (a[i - 1] === b[j - 1] ? 0 : 1);
                r[i][j] = Math.min(r[i - 1][j] + 1, r[i][j - 1] + 1, r[i - 1][j - 1] + s);
          }
      }
        return r[a.length][b.length];
  };
}
