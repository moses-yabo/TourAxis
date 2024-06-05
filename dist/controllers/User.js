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
        if (!users || users.length === 0)
            return res.status(404).json({
                message: "users is not found",
                status: 200,
                users: users
            });
        res.status(200).json({ message: "success", status: 200, users: users });
    }
    catch (err) {
        res.status(500).json({ message: "internal server Error", status: 500, error: err });
    }
});
exports.getUsers = getUsers;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params["user_id"];
        const user = yield User_1.Users.findById(userId);
        if (!user)
            return res.status(404).json({ message: "user is not found", status: 404 });
        res.status(200).json({ message: "success !!", status: 200, data: user });
    }
    catch (err) {
        res.status(500).json({ message: "internal server error", status: 500, error: err });
    }
});
exports.getUser = getUser;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield User_1.Users.create(req.body);
        yield user.save();
        if (!user)
            return res.status(404).json({ message: "failed to create a user !", status: 404 });
        res.status(201).json({ message: "Created a user", status: 201 });
    }
    catch (error) {
        res.status(500).json({ message: "Failed", status: 500 });
    }
});
exports.createUser = createUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params["user_id"];
        const user = yield User_1.Users.findOneAndUpdate({ _id: userId }, req.body, { new: true });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User updated successfully!", status: 200, user });
    }
    catch (err) {
        res.status(500).json({ message: "Internal server error", error: err });
    }
});
exports.updateUser = updateUser;
