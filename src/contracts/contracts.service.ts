import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Contract } from 'src/contracts/contracts';

@Injectable()
export class ContractsService {
    constructor(
        @InjectModel('Contracts') private readonly contractModel:Model<Contract>
    ){}
    async getAllContracts(){
        try {
            const contracts = await this.contractModel.find();
            return contracts
        } catch (error) {
            return {message:error.message};
        }
    }

    async getMouvementContracts(mouvement:string){
        try {
            const contracts = await this.contractModel.find();
            let toReturn = [];
            // for(var i=0;i<contracts.length;i++){
            //     if(contracts[i].mouvement1 !=mouvement && contracts[i].mouvement2!=mouvement && contracts[i].mouvement3!=mouvement && contracts[i].mouvement4!=mouvement && contracts[i].mouvement5!=mouvement){
            //         contracts.splice(i,1);
            //     }
            // }
            for(var i =0;i<contracts.length;i++){
                if(contracts[i].mouvement1 == mouvement || contracts[i].mouvement2 == mouvement || contracts[i].mouvement3 == mouvement || contracts[i].mouvement4 == mouvement || contracts[i].mouvement5 == mouvement){
                    toReturn.push(contracts[i]);
                }
            }
            return toReturn;
        } catch (error) {
            return {message:error.message};
        }
    }

    async addContract(contract:any){
        try {
            const newContract = new this.contractModel(contract);
            const result = await newContract.save();
            return result;
        } catch (error) {
            return {message:error.message};
        }
    }

    async deleteContract(objects:any){
        try {
            for(var object of objects){
                await this.contractModel.findByIdAndDelete(object._id);
            }
            
            return {message:"done"};
        } catch (error) {
            return {message: error.message};
        }
    }
}
