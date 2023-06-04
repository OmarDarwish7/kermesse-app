"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const contracts_module_1 = require("./contracts/contracts.module");
const jeux_module_1 = require("./jeux/jeux.module");
const mongoose_1 = require("@nestjs/mongoose");
const users_module_1 = require("./users/users.module");
const mouvements_module_1 = require("./mouvements/mouvements.module");
const requests_module_1 = require("./requests/requests.module");
const file_module_1 = require("./file/file.module");
const test_module_1 = require("./test/test.module");
const magasins_module_1 = require("./magasins/magasins.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot('mongodb://kermesse:kermesse@ac-urdgbyt-shard-00-00.9mzjz3t.mongodb.net:27017,ac-urdgbyt-shard-00-01.9mzjz3t.mongodb.net:27017,ac-urdgbyt-shard-00-02.9mzjz3t.mongodb.net:27017/?ssl=true&replicaSet=atlas-12jqth-shard-0&authSource=admin&retryWrites=true&w=majority'),
            contracts_module_1.ContractsModule, jeux_module_1.JeuxModule, users_module_1.UsersModule, mouvements_module_1.MouvementsModule, requests_module_1.RequestsModule, file_module_1.FileModule, test_module_1.TestModule, magasins_module_1.MagasinsModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map