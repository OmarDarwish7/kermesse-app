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
exports.MouvementsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let MouvementsService = class MouvementsService {
    constructor(mouvementModel) {
        this.mouvementModel = mouvementModel;
    }
    async getAllMouvements() {
        try {
            const mouvements = await this.mouvementModel.find();
            return mouvements;
        }
        catch (error) {
            return { message: error.message };
        }
    }
    async getMouvement(mouvement) {
        try {
            const result = await this.mouvementModel.findOne({ name: mouvement });
            return result;
        }
        catch (error) {
            return { message: error.message };
        }
    }
    async addMouvement(mouvement) {
        try {
            const newMouv = new this.mouvementModel(mouvement);
            const result = await newMouv.save();
            return result;
        }
        catch (error) {
            return { message: error.message };
        }
    }
    async addPrint(mouvement) {
        try {
            const mouv = await this.mouvementModel.find({ name: mouvement });
            const mouv1 = mouv[0];
            mouv1.printCount = mouv1.printCount + 1;
            await this.mouvementModel.findByIdAndUpdate(mouv1._id, mouv1);
            return mouv1.printCount;
        }
        catch (error) {
            return { message: error.message };
        }
    }
    async deleteMouvement(objects) {
        try {
            for (var object of objects) {
                await this.mouvementModel.findByIdAndDelete(object._id);
            }
            return { message: "done" };
        }
        catch (error) {
            return { message: error.message };
        }
    }
    async ResetPrintCount() {
        try {
            const mouvements = await this.mouvementModel.find();
            for (var mouvement of mouvements) {
                mouvement.printCount = 0;
                await this.mouvementModel.findByIdAndUpdate(mouvement._id, mouvement);
            }
            return "success";
        }
        catch (error) {
            return { message: error.message };
        }
    }
};
MouvementsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Mouvements')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], MouvementsService);
exports.MouvementsService = MouvementsService;
//# sourceMappingURL=mouvements.service.js.map