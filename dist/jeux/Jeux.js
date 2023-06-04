"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jeuSchema = void 0;
const mongoose = require("mongoose");
exports.jeuSchema = new mongoose.Schema({
    name: { type: String, required: true },
    mouvement: { type: String, required: true },
    pdf: { type: String }
});
//# sourceMappingURL=Jeux.js.map