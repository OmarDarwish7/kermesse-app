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
exports.JeuxController = void 0;
const common_1 = require("@nestjs/common");
const decorators_1 = require("@nestjs/common/decorators");
const jeux_service_1 = require("./jeux.service");
let JeuxController = class JeuxController {
    constructor(jeuxService) {
        this.jeuxService = jeuxService;
    }
    async getAllJeux() {
        const jeux = await this.jeuxService.getAllJeux();
        return jeux;
    }
    async getMouvementJeux(mouvement) {
        const jeux = await this.jeuxService.getMouvementJeux(mouvement.mouvement);
        return jeux;
    }
    async searchByName(name) {
        const jeux = await this.jeuxService.searchByName(name.name);
        return jeux;
    }
    async addJeu(jeu) {
        const result = await this.jeuxService.addJeu(jeu);
        return result;
    }
    async deleteJeux(objects) {
        const result = await this.jeuxService.deleteJeux(objects);
        return result;
    }
};
__decorate([
    (0, common_1.Get)('getalljeux'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], JeuxController.prototype, "getAllJeux", null);
__decorate([
    (0, decorators_1.Post)('getmouvementjeux'),
    __param(0, (0, decorators_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], JeuxController.prototype, "getMouvementJeux", null);
__decorate([
    (0, decorators_1.Post)('searchByname'),
    __param(0, (0, decorators_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], JeuxController.prototype, "searchByName", null);
__decorate([
    (0, decorators_1.Post)('addjeu'),
    __param(0, (0, decorators_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], JeuxController.prototype, "addJeu", null);
__decorate([
    (0, decorators_1.Post)('deletejeu'),
    __param(0, (0, decorators_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], JeuxController.prototype, "deleteJeux", null);
JeuxController = __decorate([
    (0, common_1.Controller)('jeux'),
    __metadata("design:paramtypes", [jeux_service_1.JeuxService])
], JeuxController);
exports.JeuxController = JeuxController;
//# sourceMappingURL=jeux.controller.js.map