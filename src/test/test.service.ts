import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Test } from 'src/test/Test';

@Injectable()
export class TestService {
    constructor(
        @InjectModel('Testing')private readonly TestModel: Model<Test>,
    ){}

    async getSimilar(){
        const magasins = await this.TestModel.find();
        var result = [];
        for(let i=0;i<100;i++){
            for(let j =0;j<100;j++){
                if(j!=i){
                    if(this.calculateLevenshteinDistance(magasins[i].Magasin.toLowerCase(),magasins[j].Magasin.toLowerCase()) < magasins[i].Magasin.length/2 + magasins[i].Magasin.length/10){
                        result.push(magasins[i].Magasin);
                        result.push(magasins[j].Magasin);
                        result.push("-----------------------");
                    }
                    // if(this.getSameCount(magasins[i].Magasin.toLowerCase(),magasins[j].Magasin.toLowerCase())>=0.9*magasins[i].Magasin.length){
                    //     result.push(magasins[i].Magasin);
                    //     result.push(magasins[j].Magasin);
                    // }
                }
            }
        }
        return result;

    }

    async getAll(){
        const magasins = await this.TestModel.find();
        return magasins;
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
