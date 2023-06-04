/// <reference types="mongoose/types/pipelinestage" />
import { Mouvement } from 'src/mouvements/Mouvements';
import { Model } from 'mongoose';
export declare class MouvementsService {
    private readonly mouvementModel;
    constructor(mouvementModel: Model<Mouvement>);
    getAllMouvements(): Promise<(import("mongoose").Document<unknown, any, Mouvement> & Mouvement & {
        _id: string;
    })[] | {
        message: any;
    }>;
    getMouvement(mouvement: string): Promise<(import("mongoose").Document<unknown, any, Mouvement> & Mouvement & {
        _id: string;
    }) | {
        message: any;
    }>;
    addMouvement(mouvement: any): Promise<(import("mongoose").Document<unknown, any, Mouvement> & Mouvement & {
        _id: string;
    }) | {
        message: any;
    }>;
    addPrint(mouvement: string): Promise<number | {
        message: any;
    }>;
    deleteMouvement(objects: any): Promise<{
        message: any;
    }>;
    ResetPrintCount(): Promise<"success" | {
        message: any;
    }>;
}
