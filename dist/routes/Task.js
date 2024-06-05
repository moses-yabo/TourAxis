"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskRouter = void 0;
const express_1 = require("express");
const Task_1 = require("../controllers/Task");
exports.taskRouter = (0, express_1.Router)({ mergeParams: true });
exports.taskRouter
    .route("/")
    .get(Task_1.getTasks)
    .post(Task_1.createTask);
exports.taskRouter
    .route("/:task_id")
    .get(Task_1.getTask)
    .put(Task_1.updateTask)
    .delete(Task_1.deleteTask);
