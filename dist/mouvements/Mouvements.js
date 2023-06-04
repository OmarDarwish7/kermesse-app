"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mouvementSchema = void 0;
const mongoose = require("mongoose");
exports.mouvementSchema = new mongoose.Schema({
    name: { type: String, required: true },
    printCount: { type: Number, required: true },
});
//# sourceMappingURL=Mouvements.js.map