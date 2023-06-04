/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose" />
import { MouvementsService } from './mouvements.service';
export declare class MouvementsController {
    private mouvService;
    constructor(mouvService: MouvementsService);
    getAllMouvements(): Promise<(import("mongoose").Document<unknown, any, import("./Mouvements").Mouvement> & import("./Mouvements").Mouvement & {
        _id: string;
    })[] | {
        message: any;
    }>;
    getMouvement(mouvement: any): Promise<(import("mongoose").Document<unknown, any, import("./Mouvements").Mouvement> & import("./Mouvements").Mouvement & {
        _id: string;
    }) | {
        message: any;
    }>;
    deleteMouvement(mouvements: any): Promise<void>;
    addMouvement(mouvement: any): Promise<void>;
    addPrint(mouvement: any): Promise<number | {
        message: any;
    }>;
    ResetPrintCount(): Promise<void>;
}
