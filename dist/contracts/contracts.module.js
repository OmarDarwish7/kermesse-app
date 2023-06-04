"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractsModule = void 0;
const common_1 = require("@nestjs/common");
const contracts_service_1 = require("./contracts.service");
const contracts_controller_1 = require("./contracts.controller");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose = require("mongoose");
const contractSchema = new mongoose.Schema({
    magasin: { type: String },
    mouvement1: { type: String },
    mouvement2: { type: String },
    mouvement3: { type: String },
    mouvement4: { type: String },
    mouvement5: { type: String },
    percentage1: { type: String },
    percentage2: { type: String },
    percentage3: { type: String },
    percentage4: { type: String },
    percentage5: { type: String },
    expiryDate: { type: String },
    hardCopy: { type: String, required: false },
});
let ContractsModule = class ContractsModule {
};
ContractsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'Contracts', schema: contractSchema }]),
        ],
        controllers: [contracts_controller_1.ContractsController],
        providers: [contracts_service_1.ContractsService],
    })
], ContractsModule);
exports.ContractsModule = ContractsModule;
//# sourceMappingURL=contracts.module.js.map