"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const User_1 = require("../controllers/User");
const Task_1 = require("../routes/Task");
exports.userRouter = (0, express_1.Router)();
exports.userRouter
    .route("/")
    .get(User_1.getUsers)
    .post(User_1.createUser);
exports.userRouter
    .route("/:user_id")
    .get(User_1.getUser)
    .put(User_1.updateUser);
exports.userRouter.use("/:user_id/tasks", Task_1.taskRouter);
