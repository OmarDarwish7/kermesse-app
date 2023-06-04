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
exports.RequestsController = void 0;
const common_1 = require("@nestjs/common");
const requests_service_1 = require("./requests.service");
let RequestsController = class RequestsController {
    constructor(requestService) {
        this.requestService = requestService;
    }
    async getAllRequests() {
        const requests = await this.requestService.getAllRequests();
        return requests;
    }
    async getMouvementRequests(mouvement) {
        const requests = await this.requestService.getMouvementRequests(mouvement.mouvement);
        return requests;
    }
    async addRequests(requests) {
        const result = await this.requestService.addRequests(requests);
        return result;
    }
    async deleteRequests(requests) {
        const result = await this.requestService.deleteRequests(requests);
        return result;
    }
    async requestPrinted(magasin) {
        console.log("IN");
        const result = await this.requestService.requestPrinted(magasin.magasin);
    }
};
__decorate([
    (0, common_1.Get)('getallrequests'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RequestsController.prototype, "getAllRequests", null);
__decorate([
    (0, common_1.Post)('getmouvementrequests'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RequestsController.prototype, "getMouvementRequests", null);
__decorate([
    (0, common_1.Post)('addrequests'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RequestsController.prototype, "addRequests", null);
__decorate([
    (0, common_1.Post)('deleterequests'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RequestsController.prototype, "deleteRequests", null);
__decorate([
    (0, common_1.Post)('requestprinted'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RequestsController.prototype, "requestPrinted", null);
RequestsController = __decorate([
    (0, common_1.Controller)('requests'),
    __metadata("design:paramtypes", [requests_service_1.RequestsService])
], RequestsController);
exports.RequestsController = RequestsController;
//# sourceMappingURL=requests.controller.js.map