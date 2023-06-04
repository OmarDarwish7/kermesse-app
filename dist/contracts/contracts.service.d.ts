/// <reference types="mongoose/types/pipelinestage" />
import { Model } from 'mongoose';
import { Contract } from 'src/contracts/contracts';
export declare class ContractsService {
    private readonly contractModel;
    constructor(contractModel: Model<Contract>);
    getAllContracts(): Promise<(import("mongoose").Document<unknown, any, Contract> & Contract & {
        _id: string;
    })[] | {
        message: any;
    }>;
    getMouvementContracts(mouvement: string): Promise<any[] | {
        message: any;
    }>;
    addContract(contract: any): Promise<(import("mongoose").Document<unknown, any, Contract> & Contract & {
        _id: string;
    }) | {
        message: any;
    }>;
    deleteContract(objects: any): Promise<{
        message: any;
    }>;
}
