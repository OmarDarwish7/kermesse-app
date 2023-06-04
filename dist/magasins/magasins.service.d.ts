/// <reference types="mongoose/types/pipelinestage" />
import { Magasin } from 'src/magasins/magasins';
import { Model } from 'mongoose';
export declare class MagasinsService {
    private readonly magasinModel;
    constructor(magasinModel: Model<Magasin>);
    getAllMagasins(): Promise<(import("mongoose").Document<unknown, any, Magasin> & Magasin & {
        _id: string;
    })[] | {
        message: any;
    }>;
    getMouvementMagasins(mouvement: any): Promise<(import("mongoose").Document<unknown, any, Magasin> & Magasin & {
        _id: string;
    })[] | {
        message: any;
    }>;
    searchByName(name: string): Promise<any[] | {
        message: any;
    }>;
    Printed(id: string): Promise<(import("mongoose").Document<unknown, any, Magasin> & Magasin & {
        _id: string;
    }) | {
        message: any;
    }>;
    Printed2(mag: string): Promise<(import("mongoose").Document<unknown, any, Magasin> & Magasin & {
        _id: string;
    }) | {
        message: any;
    }>;
    getMouvements(): Promise<any[] | {
        mesage: any;
    }>;
    addMagasin(magasin: Magasin): Promise<(import("mongoose").Document<unknown, any, Magasin> & Magasin & {
        _id: string;
    }) | {
        message: any;
    }>;
    updateMagasin(magasin: Magasin): Promise<(import("mongoose").Document<unknown, any, Magasin> & Magasin & {
        _id: string;
    }) | {
        message: any;
    }>;
    renameMagasin(object: any): Promise<{
        message: string;
    }>;
    deleteMagasin(objects: any): Promise<{
        message: any;
    }>;
    setPrinted(): Promise<void>;
    setBlocked(): Promise<void>;
    deleteByMouvement(mouvement: string): Promise<void>;
    getSameCount(str1: string, str2: string): number;
    calculateLevenshteinDistance(a: string, b: string): any;
}
