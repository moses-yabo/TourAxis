"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const User_1 = require("../controllers/User");
exports.userRouter = (0, express_1.Router)();
exports.userRouter
    .route("/")
    .get(User_1.getUsers)
    .post(User_1.createUser);
exports.userRouter
    .route("/:id")
    .get(User_1.getUser)
    .put(User_1.updateUser);
