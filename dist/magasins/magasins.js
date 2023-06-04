"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.magasinSchema = void 0;
const mongoose = require("mongoose");
exports.magasinSchema = new mongoose.Schema({
    Numero: { type: String },
    Mouvement: { type: String, required: true },
    Magasin: { type: String, required: true },
    Printed: { type: String, required: true },
    Year: { type: String, required: true },
    Blocked: { type: String, required: true }
});
//# sourceMappingURL=magasins.js.map