"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileSchema = void 0;
const mongoose_1 = require("mongoose");
exports.fileSchema = new mongoose_1.Schema({
    id2: { type: String, required: true },
    originalname: { type: String, required: true },
    buffer: { type: Buffer, required: true },
    createdAt: { type: Date, default: Date.now },
});
//# sourceMappingURL=File.js.map