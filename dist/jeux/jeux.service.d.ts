/// <reference types="mongoose/types/pipelinestage" />
import { Jeu } from 'src/jeux/Jeux';
import { Model } from 'mongoose';
export declare class JeuxService {
    private readonly jeuModel;
    constructor(jeuModel: Model<Jeu>);
    getAllJeux(): Promise<(import("mongoose").Document<unknown, any, Jeu> & Jeu & {
        _id: string;
    })[] | {
        message: any;
    }>;
    getMouvementJeux(mouvement: string): Promise<(import("mongoose").Document<unknown, any, Jeu> & Jeu & {
        _id: string;
    })[] | {
        message: any;
    }>;
    searchByName(name: string): Promise<(import("mongoose").Document<unknown, any, Jeu> & Jeu & {
        _id: string;
    })[] | {
        message: any;
    }>;
    addJeu(jeu: any): Promise<(import("mongoose").Document<unknown, any, Jeu> & Jeu & {
        _id: string;
    }) | {
        message: any;
    }>;
    deleteJeux(objects: any): Promise<{
        message: any;
    }>;
    getSameCount(str1: string, str2: string): number;
}
