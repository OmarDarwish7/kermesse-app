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
exports.MouvementsController = void 0;
const common_1 = require("@nestjs/common");
const mouvements_service_1 = require("./mouvements.service");
let MouvementsController = class MouvementsController {
    constructor(mouvService) {
        this.mouvService = mouvService;
    }
    async getAllMouvements() {
        const mouvements = await this.mouvService.getAllMouvements();
        return mouvements;
    }
    async getMouvement(mouvement) {
        const result = await this.mouvService.getMouvement(mouvement.name);
        return result;
    }
    async deleteMouvement(mouvements) {
        await this.mouvService.deleteMouvement(mouvements);
    }
    async addMouvement(mouvement) {
        const newMouv = this.mouvService.addMouvement(mouvement);
    }
    async addPrint(mouvement) {
        const result = await this.mouvService.addPrint(mouvement.mouvement);
        return result;
    }
    async ResetPrintCount() {
        await this.mouvService.ResetPrintCount();
    }
};
__decorate([
    (0, common_1.Get)('getallmouvements'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MouvementsController.prototype, "getAllMouvements", null);
__decorate([
    (0, common_1.Post)('getmouvement'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MouvementsController.prototype, "getMouvement", null);
__decorate([
    (0, common_1.Post)('deletemouvement'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MouvementsController.prototype, "deleteMouvement", null);
__decorate([
    (0, common_1.Post)('addmouvement'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MouvementsController.prototype, "addMouvement", null);
__decorate([
    (0, common_1.Post)('addprint'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MouvementsController.prototype, "addPrint", null);
__decorate([
    (0, common_1.Patch)('resetprintcount'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MouvementsController.prototype, "ResetPrintCount", null);
MouvementsController = __decorate([
    (0, common_1.Controller)('mouvements'),
    __metadata("design:paramtypes", [mouvements_service_1.MouvementsService])
], MouvementsController);
exports.MouvementsController = MouvementsController;
//# sourceMappingURL=mouvements.controller.js.map