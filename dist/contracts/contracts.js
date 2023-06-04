"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contractSchema = void 0;
const mongoose = require("mongoose");
exports.contractSchema = new mongoose.Schema({
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
//# sourceMappingURL=contracts.js.map