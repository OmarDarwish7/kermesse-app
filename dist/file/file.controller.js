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
exports.FileController = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const platform_express_1 = require("@nestjs/platform-express");
const mongoose_2 = require("mongoose");
const file_service_1 = require("./file.service");
let FileController = class FileController {
    constructor(fileModel, fileService) {
        this.fileModel = fileModel;
        this.fileService = fileService;
    }
    async uploadFile(file, id2) {
        const { originalname, buffer } = file;
        const fileModel = await this.fileModel.create({ id2: id2.id, originalname, buffer });
        await this.fileService.saveFile(fileModel);
    }
    async downloadFile(id) {
        console.log(id);
        const file = await this.fileModel.findOne({ id2: id.id });
        const hexBuffer = file.buffer.toString('hex');
        const buf = Buffer.from(hexBuffer, 'hex');
        return {
            filename: file.originalname,
            buffer: buf,
        };
    }
};
__decorate([
    (0, common_1.Post)('upload/:id'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], FileController.prototype, "uploadFile", null);
__decorate([
    (0, common_1.Get)('download/:id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FileController.prototype, "downloadFile", null);
FileController = __decorate([
    (0, common_1.Controller)('files'),
    __param(0, (0, mongoose_1.InjectModel)('File')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        file_service_1.FileService])
], FileController);
exports.FileController = FileController;
//# sourceMappingURL=file.controller.js.map