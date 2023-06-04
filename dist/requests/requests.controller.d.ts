/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose" />
import { RequestsService } from './requests.service';
export declare class RequestsController {
    private requestService;
    constructor(requestService: RequestsService);
    getAllRequests(): Promise<(import("mongoose").Document<unknown, any, Request> & Request & {
        _id: import("mongoose").Types.ObjectId;
    })[] | {
        message: any;
    }>;
    getMouvementRequests(mouvement: any): Promise<(import("mongoose").Document<unknown, any, Request> & Request & {
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
    requestPrinted(magasin: any): Promise<void>;
}
