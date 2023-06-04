import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/users/Users';
@Injectable()
export class UsersService {
    constructor(
        @InjectModel('Users')private readonly UserModel: Model<User>,
    ){}
    async getAllUsers(){
        try{
            const users = await this.UserModel.find();
            return users;
        }
        catch(error){
            return {message:error.message};
        }
    }

    async getUser(id:string){
        try {
            const user = await this.UserModel.findById(id);
            return user;
        } catch (error) {
            return {message:error.message};
        }
    }

    async authenticateUserLogin(credentials:any){
        var username = credentials.username;
        var password = credentials.password;
        try {
            var authenticate = await this.UserModel.find({username,password});
            if(authenticate.length == 0){
                return {false:false};
            }
            else{
                const user = await this.UserModel.findById(authenticate[0]._id);
                return user;
                
            }
        } catch (error) {
            return {message:error.message};
        }
    }
    async addNewUser(user:any){
        try {
            const newUser = new this.UserModel(user);
            var alreadyExists = await this.UserModel.find({username:user.username});
            if(alreadyExists.length !=0){
                return false;
            }
            else{
                const result = await newUser.save();
                return true;
            }
            
        } catch (error) {
            return {message:error.message};
        }
    }
    async updateUser(user:any){
        try {
                const updUser = await this.UserModel.findByIdAndUpdate(user._id,user);
                return updUser;
           
        } catch (error) {
            return {message:error.message};
        }
    }

    async deleteUser(objects:any){
        try {
            for(var object of objects){
                 await this.UserModel.findByIdAndDelete(object._id);
            }
            return {message:"200"};

        } catch (error) {
            return {message:error.message};
        }
    }

}
