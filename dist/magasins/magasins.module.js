"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MagasinsModule = exports.magasinSchema = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const magasins_controller_1 = require("./magasins.controller");
const magasins_service_1 = require("./magasins.service");
const mongoose = require("mongoose");
exports.magasinSchema = new mongoose.Schema({
    Numero: { type: String },
    Mouvement: { type: String, required: true },
    Magasin: { type: String, required: true },
    Printed: { type: String, required: true },
    Year: { type: String, required: true },
    Blocked: { type: String, required: true }
});
let MagasinsModule = class MagasinsModule {
};
MagasinsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'Magasins', schema: exports.magasinSchema }])
        ],
        controllers: [magasins_controller_1.MagasinsController],
        providers: [magasins_service_1.MagasinsService]
    })
], MagasinsModule);
exports.MagasinsModule = MagasinsModule;
//# sourceMappingURL=magasins.module.js.map