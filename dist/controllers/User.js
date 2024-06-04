"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.createUser = exports.getUser = exports.getUsers = void 0;
const User_1 = require("./../model/User");
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield User_1.Users.find({});
        if (!users)
            return;
        console.log(` ${users}`);
        if (res.statusCode === 200) {
            res
                .json({
                message: "success",
                status: 200,
                location: "User Controller",
                users: users
            });
        }
        else {
            res.status(500)
                .json({
                message: "failed",
                status: 500
            });
        }
    }
    catch (err) {
        console.log(err);
    }
});
exports.getUsers = getUsers;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params["id"];
    try {
        const user = yield User_1.Users.findById(userId);
        console.log(` ${user}`);
        if (res.statusCode === 200) {
            res
                .json({
                message: "success",
                status: 200,
                data: user
            });
        }
        else {
            res.status(500)
                .json({
                message: "failed",
                status: 500
            });
        }
    }
    catch (err) {
        console.log(err);
    }
});
exports.getUser = getUser;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User_1.Users.create(req.body);
    console.log(user);
    //if(!user) return;
    yield user.save();
    console.log(`status code is  ${res.statusCode}`);
    if (res.statusCode == 200 || res.statusCode >= 201) {
        res.json({
            message: "Created a user",
            status: 201
        });
    }
    else {
        res.status(500).json({
            message: "Failed",
            status: 500
        });
    }
});
exports.createUser = createUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params["id"];
    try {
        const user = yield User_1.Users.updateMany({ _id: userId }, req.body);
        res.status(204).json({
            message: "updated user !",
            status: 204
        });
    }
    catch (err) {
        res
            .status(500)
            .json({
            message: "Failed !",
            error: err
        });
        throw (err);
    }
});
exports.updateUser = updateUser;
