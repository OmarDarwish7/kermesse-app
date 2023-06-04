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
exports.MagasinsController = void 0;
const common_1 = require("@nestjs/common");
const magasins_service_1 = require("./magasins.service");
let MagasinsController = class MagasinsController {
    constructor(magService) {
        this.magService = magService;
    }
    async getAllMagasins() {
        const magasins = await this.magService.getAllMagasins();
        return magasins;
    }
    async getMouvementMagasins(mouvement) {
        const magasins = await this.magService.getMouvementMagasins(mouvement);
        return magasins;
    }
    async searchByName(name) {
        const magasins = await this.magService.searchByName(name.name);
        return magasins;
    }
    async Printed(id) {
        const result = await this.magService.Printed(id.id);
        return result;
    }
    async Printed2(magasin) {
        const result = await this.magService.Printed2(magasin.magasin);
        return result;
    }
    async getMouvements() {
        const mouvements = await this.magService.getMouvements();
        return mouvements;
    }
    async addMagasin(magasin) {
        const newmagasin = await this.magService.addMagasin(magasin);
        return newmagasin;
    }
    async updateMagasin(magasin) {
        const updMagasin = this.magService.updateMagasin(magasin);
        return updMagasin;
    }
    async renameMagasin(object) {
        const response = this.magService.renameMagasin(object);
        return response;
    }
    async deleteMagasin(objects) {
        const result = await this.magService.deleteMagasin(objects);
        return result;
    }
    async setPrinted() {
        this.magService.setPrinted();
    }
    async setBlocked() {
        this.magService.setBlocked();
    }
    async deleteByMouvement(mouvement) {
        const result = await this.magService.deleteByMouvement(mouvement.mouvement);
        return result;
    }
};
__decorate([
    (0, common_1.Get)('getallmagasins'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MagasinsController.prototype, "getAllMagasins", null);
__decorate([
    (0, common_1.Post)('getMouvementMagasins'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MagasinsController.prototype, "getMouvementMagasins", null);
__decorate([
    (0, common_1.Post)('searchByname'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MagasinsController.prototype, "searchByName", null);
__decorate([
    (0, common_1.Post)('printed'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MagasinsController.prototype, "Printed", null);
__decorate([
    (0, common_1.Post)('printed2'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MagasinsController.prototype, "Printed2", null);
__decorate([
    (0, common_1.Get)('getmouvements'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MagasinsController.prototype, "getMouvements", null);
__decorate([
    (0, common_1.Post)('addmagasin'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MagasinsController.prototype, "addMagasin", null);
__decorate([
    (0, common_1.Patch)('updatemagasin'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MagasinsController.prototype, "updateMagasin", null);
__decorate([
    (0, common_1.Post)('renamemagasin'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MagasinsController.prototype, "renameMagasin", null);
__decorate([
    (0, common_1.Post)('deletemagasin'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MagasinsController.prototype, "deleteMagasin", null);
__decorate([
    (0, common_1.Post)('setPrinted'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MagasinsController.prototype, "setPrinted", null);
__decorate([
    (0, common_1.Post)('setBlocked'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MagasinsController.prototype, "setBlocked", null);
__decorate([
    (0, common_1.Post)('deletebymouvement'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MagasinsController.prototype, "deleteByMouvement", null);
MagasinsController = __decorate([
    (0, common_1.Controller)('magasins'),
    __metadata("design:paramtypes", [magasins_service_1.MagasinsService])
], MagasinsController);
exports.MagasinsController = MagasinsController;
//# sourceMappingURL=magasins.controller.js.map