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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let UsersService = class UsersService {
    constructor(UserModel) {
        this.UserModel = UserModel;
    }
    async getAllUsers() {
        try {
            const users = await this.UserModel.find();
            return users;
        }
        catch (error) {
            return { message: error.message };
        }
    }
    async getUser(id) {
        try {
            const user = await this.UserModel.findById(id);
            return user;
        }
        catch (error) {
            return { message: error.message };
        }
    }
    async authenticateUserLogin(credentials) {
        var username = credentials.username;
        var password = credentials.password;
        try {
            var authenticate = await this.UserModel.find({ username, password });
            if (authenticate.length == 0) {
                return { false: false };
            }
            else {
                const user = await this.UserModel.findById(authenticate[0]._id);
                return user;
            }
        }
        catch (error) {
            return { message: error.message };
        }
    }
    async addNewUser(user) {
        try {
            const newUser = new this.UserModel(user);
            var alreadyExists = await this.UserModel.find({ username: user.username });
            if (alreadyExists.length != 0) {
                return false;
            }
            else {
                const result = await newUser.save();
                return true;
            }
        }
        catch (error) {
            return { message: error.message };
        }
    }
    async updateUser(user) {
        try {
            const updUser = await this.UserModel.findByIdAndUpdate(user._id, user);
            return updUser;
        }
        catch (error) {
            return { message: error.message };
        }
    }
    async deleteUser(objects) {
        try {
            for (var object of objects) {
                await this.UserModel.findByIdAndDelete(object._id);
            }
            return { message: "200" };
        }
        catch (error) {
            return { message: error.message };
        }
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Users')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map