"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const mongoose = require("mongoose");
exports.userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    mouvement: { type: String, required: true },
    type: { type: String, required: true },
});
//# sourceMappingURL=Users.js.map