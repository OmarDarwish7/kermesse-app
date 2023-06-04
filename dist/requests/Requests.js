"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestSchema = void 0;
const mongoose = require("mongoose");
exports.requestSchema = new mongoose.Schema({
    Mouvement: { type: String, required: true, unique: false },
    Magasin: { type: String, required: true, unique: true },
    printCount: { type: Number, required: true },
    printed: { type: String, required: true },
    requestor: { type: String, required: true },
    Blocked: { type: String, required: true },
});
//# sourceMappingURL=Requests.js.map