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
exports.TestService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let TestService = class TestService {
    constructor(TestModel) {
        this.TestModel = TestModel;
    }
    async getSimilar() {
        const magasins = await this.TestModel.find();
        var result = [];
        for (let i = 0; i < 100; i++) {
            for (let j = 0; j < 100; j++) {
                if (j != i) {
                    if (this.calculateLevenshteinDistance(magasins[i].Magasin.toLowerCase(), magasins[j].Magasin.toLowerCase()) < magasins[i].Magasin.length / 2 + magasins[i].Magasin.length / 10) {
                        result.push(magasins[i].Magasin);
                        result.push(magasins[j].Magasin);
                        result.push("-----------------------");
                    }
                }
            }
        }
        return result;
    }
    async getAll() {
        const magasins = await this.TestModel.find();
        return magasins;
    }
    getSameCount(str1, str2) {
        let count = 0;
        const obj = str2.split("");
        for (let str of str1) {
            let idx = obj.findIndex(s => s === str);
            if (idx >= 0) {
                count++;
                obj.splice(idx, 1);
            }
        }
        return count;
    }
    calculateLevenshteinDistance(a, b) {
        const c = a.length + 1;
        const d = b.length + 1;
        const r = Array(c);
        for (let i = 0; i < c; ++i)
            r[i] = Array(d);
        for (let i = 0; i < c; ++i)
            r[i][0] = i;
        for (let j = 0; j < d; ++j)
            r[0][j] = j;
        for (let i = 1; i < c; ++i) {
            for (let j = 1; j < d; ++j) {
                const s = (a[i - 1] === b[j - 1] ? 0 : 1);
                r[i][j] = Math.min(r[i - 1][j] + 1, r[i][j - 1] + 1, r[i - 1][j - 1] + s);
            }
        }
        return r[a.length][b.length];
    }
    ;
};
TestService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Testing')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TestService);
exports.TestService = TestService;
//# sourceMappingURL=test.service.js.map