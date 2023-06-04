import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {Model} from 'mongoose';

@Injectable()
export class RequestsService {
    constructor(
        @InjectModel('Request')private readonly requestModel: Model<Request>,
    ){}

    async getAllRequests(){
        try {
           const requests = await this.requestModel.find();
           return requests; 
        } catch (error) {
            return {message:error.message};
        }
    }

    async getMouvementRequests(mouvement:string){
        try {
            const requests = await this.requestModel.find({"Mouvement":mouvement});
            return requests;
        } catch (error) {
            return {message: error.message};
        }
    }
    
    async addRequests(requests:any){
        try {
            console.log(requests);
            for(var request of requests){
                const newRequest = new this.requestModel(request);
                console.log(newRequest);
                try {
                    await newRequest.save();
                } catch (error) {
                    console.log(error);
                    continue;
                }               
            }
            return {message:"success"};
        } catch (error) {
            return {message: error.message};
        }
    }

    async deleteRequests(requests:any){
        try {
            for(var request of requests){
                await this.requestModel.findByIdAndDelete(request._id);
            }
            return {message:"success"};
        } catch (error) {
            return {message:error.message}
        }

    }

    async requestPrinted(magasin:string){
        try{
          let mag = await this.requestModel.findOne({"Magasin":magasin});
          console.log(mag);
           
        }
        catch(error){

        }
    }
}
