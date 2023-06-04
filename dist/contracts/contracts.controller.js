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
exports.ContractsController = void 0;
const common_1 = require("@nestjs/common");
const decorators_1 = require("@nestjs/common/decorators");
const contracts_service_1 = require("./contracts.service");
let ContractsController = class ContractsController {
    constructor(contractService) {
        this.contractService = contractService;
    }
    async getAllContracts() {
        const contracts = await this.contractService.getAllContracts();
        return contracts;
    }
    async addContract(contract) {
        console.log('Here');
        console.log(contract);
        const result = await this.contractService.addContract(contract);
        return result;
    }
    async getMouvementContracts(mouvement) {
        const mouv = mouvement.mouvement;
        const contracts = await this.contractService.getMouvementContracts(mouv);
        return contracts;
    }
    async deleteContract(objects) {
        const result = await this.contractService.deleteContract(objects);
        return result;
    }
};
__decorate([
    (0, common_1.Get)('getallcontracts'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ContractsController.prototype, "getAllContracts", null);
__decorate([
    (0, common_1.Post)('addcontract'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ContractsController.prototype, "addContract", null);
__decorate([
    (0, common_1.Get)('getmouvementcontracts/:mouvement'),
    __param(0, (0, decorators_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ContractsController.prototype, "getMouvementContracts", null);
__decorate([
    (0, common_1.Post)('deletecontract'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ContractsController.prototype, "deleteContract", null);
ContractsController = __decorate([
    (0, common_1.Controller)('contracts'),
    __metadata("design:paramtypes", [contracts_service_1.ContractsService])
], ContractsController);
exports.ContractsController = ContractsController;
//# sourceMappingURL=contracts.controller.js.map