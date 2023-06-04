/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose" />
import { ContractsService } from './contracts.service';
export declare class ContractsController {
    private contractService;
    constructor(contractService: ContractsService);
    getAllContracts(): Promise<(import("mongoose").Document<unknown, any, import("./contracts").Contract> & import("./contracts").Contract & {
        _id: string;
    })[] | {
        message: any;
    }>;
    addContract(contract: any): Promise<(import("mongoose").Document<unknown, any, import("./contracts").Contract> & import("./contracts").Contract & {
        _id: string;
    }) | {
        message: any;
    }>;
    getMouvementContracts(mouvement: any): Promise<any[] | {
        message: any;
    }>;
    deleteContract(objects: any): Promise<{
        message: any;
    }>;
}
