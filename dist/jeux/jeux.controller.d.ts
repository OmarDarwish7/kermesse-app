/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose" />
import { JeuxService } from './jeux.service';
export declare class JeuxController {
    private jeuxService;
    constructor(jeuxService: JeuxService);
    getAllJeux(): Promise<(import("mongoose").Document<unknown, any, import("./Jeux").Jeu> & import("./Jeux").Jeu & {
        _id: string;
    })[] | {
        message: any;
    }>;
    getMouvementJeux(mouvement: any): Promise<(import("mongoose").Document<unknown, any, import("./Jeux").Jeu> & import("./Jeux").Jeu & {
        _id: string;
    })[] | {
        message: any;
    }>;
    searchByName(name: any): Promise<(import("mongoose").Document<unknown, any, import("./Jeux").Jeu> & import("./Jeux").Jeu & {
        _id: string;
    })[] | {
        message: any;
    }>;
    addJeu(jeu: any): Promise<(import("mongoose").Document<unknown, any, import("./Jeux").Jeu> & import("./Jeux").Jeu & {
        _id: string;
    }) | {
        message: any;
    }>;
    deleteJeux(objects: any): Promise<{
        message: any;
    }>;
}
