/// <reference types="mongoose/types/pipelinestage" />
import { Model } from 'mongoose';
import { User } from 'src/users/Users';
export declare class UsersService {
    private readonly UserModel;
    constructor(UserModel: Model<User>);
    getAllUsers(): Promise<(import("mongoose").Document<unknown, any, User> & User & {
        _id: string;
    })[] | {
        message: any;
    }>;
    getUser(id: string): Promise<(import("mongoose").Document<unknown, any, User> & User & {
        _id: string;
    }) | {
        message: any;
    }>;
    authenticateUserLogin(credentials: any): Promise<(import("mongoose").Document<unknown, any, User> & User & {
        _id: string;
    }) | {
        false: boolean;
        message?: undefined;
    } | {
        message: any;
        false?: undefined;
    }>;
    addNewUser(user: any): Promise<boolean | {
        message: any;
    }>;
    updateUser(user: any): Promise<(import("mongoose").Document<unknown, any, User> & User & {
        _id: string;
    }) | {
        message: any;
    }>;
    deleteUser(objects: any): Promise<{
        message: any;
    }>;
}
