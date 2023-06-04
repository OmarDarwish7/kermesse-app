/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose" />
import { UsersService } from './users.service';
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    getAllUsers(): Promise<(import("mongoose").Document<unknown, any, import("./Users").User> & import("./Users").User & {
        _id: string;
    })[] | {
        message: any;
    }>;
    getUser(params: any): Promise<(import("mongoose").Document<unknown, any, import("./Users").User> & import("./Users").User & {
        _id: string;
    }) | {
        message: any;
    }>;
    authenticateLogin(credentials: any): Promise<(import("mongoose").Document<unknown, any, import("./Users").User> & import("./Users").User & {
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
    updateUser(user: any): Promise<(import("mongoose").Document<unknown, any, import("./Users").User> & import("./Users").User & {
        _id: string;
    }) | {
        message: any;
    }>;
    deleteUser(objects: any): Promise<{
        message: any;
    }>;
}
