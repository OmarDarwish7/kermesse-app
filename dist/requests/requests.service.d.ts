/// <reference types="mongoose/types/pipelinestage" />
import { Model } from 'mongoose';
export declare class RequestsService {
    private readonly requestModel;
    constructor(requestModel: Model<Request>);
    getAllRequests(): Promise<(import("mongoose").Document<unknown, any, Request> & Request & {
        _id: import("mongoose").Types.ObjectId;
    })[] | {
        message: any;
    }>;
    getMouvementRequests(mouvement: string): Promise<(import("mongoose").Document<unknown, any, Request> & Request & {
        _id: import("mongoose").Types.ObjectId;
    })[] | {
        message: any;
    }>;
    addRequests(requests: any): Promise<{
        message: any;
    }>;
    deleteRequests(requests: any): Promise<{
        message: any;
    }>;
    requestPrinted(magasin: string): Promise<void>;
}
