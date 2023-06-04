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
exports.RequestsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let RequestsService = class RequestsService {
    constructor(requestModel) {
        this.requestModel = requestModel;
    }
    async getAllRequests() {
        try {
            const requests = await this.requestModel.find();
            return requests;
        }
        catch (error) {
            return { message: error.message };
        }
    }
    async getMouvementRequests(mouvement) {
        try {
            const requests = await this.requestModel.find({ "Mouvement": mouvement });
            return requests;
        }
        catch (error) {
            return { message: error.message };
        }
    }
    async addRequests(requests) {
        try {
            console.log(requests);
            for (var request of requests) {
                const newRequest = new this.requestModel(request);
                console.log(newRequest);
                try {
                    await newRequest.save();
                }
                catch (error) {
                    console.log(error);
                    continue;
                }
            }
            return { message: "success" };
        }
        catch (error) {
            return { message: error.message };
        }
    }
    async deleteRequests(requests) {
        try {
            for (var request of requests) {
                await this.requestModel.findByIdAndDelete(request._id);
            }
            return { message: "success" };
        }
        catch (error) {
            return { message: error.message };
        }
    }
    async requestPrinted(magasin) {
        try {
            let mag = await this.requestModel.findOne({ "Magasin": magasin });
            console.log(mag);
        }
        catch (error) {
        }
    }
};
RequestsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Request')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], RequestsService);
exports.RequestsService = RequestsService;
//# sourceMappingURL=requests.service.js.map