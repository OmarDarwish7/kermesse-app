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
exports.ContractsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let ContractsService = class ContractsService {
    constructor(contractModel) {
        this.contractModel = contractModel;
    }
    async getAllContracts() {
        try {
            const contracts = await this.contractModel.find();
            return contracts;
        }
        catch (error) {
            return { message: error.message };
        }
    }
    async getMouvementContracts(mouvement) {
        try {
            const contracts = await this.contractModel.find();
            let toReturn = [];
            for (var i = 0; i < contracts.length; i++) {
                if (contracts[i].mouvement1 == mouvement || contracts[i].mouvement2 == mouvement || contracts[i].mouvement3 == mouvement || contracts[i].mouvement4 == mouvement || contracts[i].mouvement5 == mouvement) {
                    toReturn.push(contracts[i]);
                }
            }
            return toReturn;
        }
        catch (error) {
            return { message: error.message };
        }
    }
    async addContract(contract) {
        try {
            const newContract = new this.contractModel(contract);
            const result = await newContract.save();
            return result;
        }
        catch (error) {
            return { message: error.message };
        }
    }
    async deleteContract(objects) {
        try {
            for (var object of objects) {
                await this.contractModel.findByIdAndDelete(object._id);
            }
            return { message: "done" };
        }
        catch (error) {
            return { message: error.message };
        }
    }
};
ContractsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Contracts')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ContractsService);
exports.ContractsService = ContractsService;
//# sourceMappingURL=contracts.service.js.map