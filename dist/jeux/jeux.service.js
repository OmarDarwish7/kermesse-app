"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JeuxService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let JeuxService = class JeuxService {
    constructor(jeuModel) {
        this.jeuModel = jeuModel;
    }
    async getAllJeux() {
        try {
            const jeux = await this.jeuModel.find();
            return jeux;
        }
        catch (error) {
            return { message: error.message };
        }
    }
    async getMouvementJeux(mouvement) {
        try {
            const jeux = this.jeuModel.find({ mouvement: mouvement });
            return jeux;
        }
        catch (error) {
            return { message: error.message };
        }
    }
    async searchByName(name) {
        name = name.toLowerCase();
        try {
            var allJeux = await this.jeuModel.find();
            for (let i = 0; i < allJeux.length; i++) {
                if (this.getSameCount(name, allJeux[i].name.toLowerCase()) < 0.8 * name.length) {
                    allJeux.splice(i, 1);
                    i--;
                }
            }
            return allJeux;
        }
        catch (error) {
            return { message: error.message };
        }
    }
    async addJeu(jeu) {
        try {
            const newJeu = new this.jeuModel(jeu);
            const result = await newJeu.save();
            return result;
        }
        catch (error) {
            return { message: error.message };
        }
    }
    async deleteJeux(objects) {
        try {
            for (var object of objects) {
                await this.jeuModel.findByIdAndDelete(object._id);
            }
            return { message: 'success' };
        }
        catch (error) {
            return { message: error.message };
        }
    }
    getSameCount(str1, str2) {
        let count = 0;
        const obj = str2.split("");
        for (let str of str1) {
            let idx = obj.findIndex(s => s === str);
            if (idx >= 0) {
                count++;
                obj.splice(idx, 1);
            }
        }
        return count;
    }
};
JeuxService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Jeux')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], JeuxService);
exports.JeuxService = JeuxService;
//# sourceMappingURL=jeux.service.js.map