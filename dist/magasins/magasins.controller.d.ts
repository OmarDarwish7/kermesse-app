/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose" />
import { MagasinsService } from './magasins.service';
export declare class MagasinsController {
    private magService;
    constructor(magService: MagasinsService);
    getAllMagasins(): Promise<(import("mongoose").Document<unknown, any, import("./magasins").Magasin> & import("./magasins").Magasin & {
        _id: string;
    })[] | {
        message: any;
    }>;
    getMouvementMagasins(mouvement: any): Promise<(import("mongoose").Document<unknown, any, import("./magasins").Magasin> & import("./magasins").Magasin & {
        _id: string;
    })[] | {
        message: any;
    }>;
    searchByName(name: any): Promise<any[] | {
        message: any;
    }>;
    Printed(id: any): Promise<(import("mongoose").Document<unknown, any, import("./magasins").Magasin> & import("./magasins").Magasin & {
        _id: string;
    }) | {
        message: any;
    }>;
    Printed2(magasin: any): Promise<(import("mongoose").Document<unknown, any, import("./magasins").Magasin> & import("./magasins").Magasin & {
        _id: string;
    }) | {
        message: any;
    }>;
    getMouvements(): Promise<any[] | {
        mesage: any;
    }>;
    addMagasin(magasin: any): Promise<(import("mongoose").Document<unknown, any, import("./magasins").Magasin> & import("./magasins").Magasin & {
        _id: string;
    }) | {
        message: any;
    }>;
    updateMagasin(magasin: any): Promise<(import("mongoose").Document<unknown, any, import("./magasins").Magasin> & import("./magasins").Magasin & {
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
    deleteByMouvement(mouvement: any): Promise<void>;
}
