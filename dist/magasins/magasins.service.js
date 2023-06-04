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
exports.MagasinsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let MagasinsService = class MagasinsService {
    constructor(magasinModel) {
        this.magasinModel = magasinModel;
    }
    async getAllMagasins() {
        try {
            const magasins = await this.magasinModel.find();
            return magasins;
        }
        catch (error) {
            return { message: error.message };
        }
    }
    async getMouvementMagasins(mouvement) {
        var nom = mouvement.name;
        try {
            const magasins = await this.magasinModel.find({ Mouvement: nom });
            return magasins;
        }
        catch (error) {
            return { message: error.message };
        }
    }
    async searchByName(name) {
        name = name.toLowerCase();
        var toBeReturned = [];
        try {
            var allmagasins = await this.magasinModel.find();
            for (let i = 0; i < allmagasins.length; i++) {
                if (allmagasins[i].Magasin != undefined) {
                    const split = allmagasins[i].Magasin.split(" ");
                    const wordSplit = name.split(" ");
                    var count = 0;
                    loop: for (const substring1 of wordSplit) {
                        for (const substring of split) {
                            if (this.getSameCount(substring1, substring.toLowerCase()) >= substring1.length * 0.95) {
                                count++;
                            }
                        }
                    }
                    if (count >= wordSplit.length * 0.7) {
                        toBeReturned.push(allmagasins[i]);
                    }
                }
            }
            return toBeReturned;
        }
        catch (error) {
            return { message: error.message };
        }
    }
    async Printed(id) {
        try {
            const magasin = await this.magasinModel.findOne({ _id: id });
            magasin.Printed = "Yes";
            await this.magasinModel.findByIdAndUpdate(id, magasin);
            return magasin;
        }
        catch (error) {
            return { message: error.message };
        }
    }
    async Printed2(mag) {
        try {
            const magasin = await this.magasinModel.findOne({ Magasin: mag });
            magasin.Printed = "Yes";
            await this.magasinModel.findByIdAndUpdate(magasin._id, magasin);
            return magasin;
        }
        catch (error) {
            return { message: error.message };
        }
    }
    async getMouvements() {
        try {
            const mouvements = await this.magasinModel.distinct("Mouvement");
            return mouvements;
        }
        catch (error) {
            return { mesage: error.message };
        }
    }
    async addMagasin(magasin) {
        try {
            console.log(magasin);
            const allMagasins = await this.magasinModel.find();
            for (const mag of allMagasins) {
                if (mag.Magasin == magasin.Magasin) {
                    return { message: "Already Exists" };
                }
            }
            const newMagasin = new this.magasinModel(magasin);
            const result = await newMagasin.save();
            return result;
        }
        catch (error) {
            return { message: error.message };
        }
    }
    async updateMagasin(magasin) {
        try {
            const result = await this.magasinModel.findByIdAndUpdate(magasin._id, magasin);
            return result;
        }
        catch (error) {
            return { message: error.message };
        }
    }
    async renameMagasin(object) {
        const oldname = object.oldname;
        const newname = object.newname;
        const year = object.Year;
        const blocked = object.Blocked;
        try {
            var magasin = await this.magasinModel.findOne({ Magasin: oldname });
            if (magasin != null) {
                if (newname != "") {
                    magasin.Magasin = newname;
                }
                if (year != "") {
                    magasin.Year = year;
                }
                if (blocked != "") {
                    magasin.Blocked = blocked;
                }
                await this.magasinModel.findByIdAndUpdate(magasin._id, magasin);
                return { message: "200" };
            }
            else {
                return { message: "404" };
            }
        }
        catch (error) {
            return { message: "400" };
        }
    }
    async deleteMagasin(objects) {
        try {
            for (var object of objects) {
                await this.magasinModel.findByIdAndDelete(object._id);
            }
            return { message: "done" };
        }
        catch (error) {
            return { message: error.message };
        }
    }
    async setPrinted() {
        const magasins = await this.magasinModel.find();
        for (let magasin of magasins) {
            magasin.Printed = "No";
            await this.magasinModel.findByIdAndUpdate(magasin._id, magasin);
        }
    }
    async setBlocked() {
        console.log("in");
        const magasins = await this.magasinModel.find();
        for (let magasin of magasins) {
            magasin.Blocked = "No";
            await this.magasinModel.findByIdAndUpdate(magasin._id, magasin);
        }
    }
    async deleteByMouvement(mouvement) {
        console.log(mouvement);
        const magasins = await this.magasinModel.find({ Mouvement: mouvement });
        for (let magasin of magasins) {
            await this.magasinModel.findByIdAndDelete(magasin._id);
        }
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
MagasinsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Magasins')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], MagasinsService);
exports.MagasinsService = MagasinsService;
//# sourceMappingURL=magasins.service.js.map