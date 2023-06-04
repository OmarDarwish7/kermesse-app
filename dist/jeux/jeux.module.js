"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JeuxModule = exports.jeuSchema = void 0;
const common_1 = require("@nestjs/common");
const jeux_service_1 = require("./jeux.service");
const jeux_controller_1 = require("./jeux.controller");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose = require("mongoose");
exports.jeuSchema = new mongoose.Schema({
    name: { type: String, required: true },
    mouvement: { type: String, required: true },
    pdf: { type: String }
});
let JeuxModule = class JeuxModule {
};
JeuxModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'Jeux', schema: exports.jeuSchema }]),
        ],
        controllers: [jeux_controller_1.JeuxController],
        providers: [jeux_service_1.JeuxService],
    })
], JeuxModule);
exports.JeuxModule = JeuxModule;
//# sourceMappingURL=jeux.module.js.map