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
exports.updateTask = exports.deleteTask = exports.createTask = exports.getTask = exports.getTasks = void 0;
const Task_1 = require("./../model/Task");
const User_1 = require("../model/User");
const getTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.user_id;
    try {
        const user = yield User_1.Users.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const tasks = yield Task_1.Task.find({ userId: userId });
        if (!tasks || tasks.length === 0) {
            return res.status(404).json({ message: "No tasks found for this user" });
        }
        res.status(200).json({ message: "Success", data: tasks });
    }
    catch (error) {
        console.error("Error fetching tasks:", error);
        res.status(500).json({ message: "Internal Server Error", error });
    }
});
exports.getTasks = getTasks;
const getTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user_id = req.params.user_id;
    const task_id = req.params.task_id;
    try {
        const user = yield User_1.Users.findById(user_id);
        if (!user)
            return res.status(404).json({ message: "User not found" });
        const task = yield Task_1.Task.findOne({ _id: task_id, userId: user_id });
        if (!task)
            return res.status(404).json({ message: "Task not found" });
        res.status(200).json({ message: "Success", data: task });
    }
    catch (error) {
        console.error("Error fetching task:", error);
        res.status(500).json({ message: "Internal Server Error", error });
    }
});
exports.getTask = getTask;
const createTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params['user_id'];
    try {
        const user = yield User_1.Users.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found", status: 404 });
        }
        const task = new Task_1.Task(Object.assign(Object.assign({}, req.body), { userId: userId }));
        yield task.save();
        res.status(201).json({ message: "Task created", data: task });
        console.log(task);
    }
    catch (error) {
        console.error("Error creating task:", error);
        res.status(500).json({ message: "Internal Server Error", error: error });
    }
});
exports.createTask = createTask;
const deleteTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params['user_id'];
    const taskId = req.params['task_id'];
    try {
        const user = yield User_1.Users.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found", status: 404 });
        }
        const task = yield Task_1.Task.findOneAndDelete({ _id: taskId, userId: userId });
        if (!task) {
            return res.status(404).json({ message: "Task not found", status: 404 });
        }
        res.status(204).json({ message: "Task deleted successfully", data: task });
    }
    catch (error) {
        console.error("Error deleting task:", error);
        res.status(500).json({ message: "Internal Server Error", error: error });
    }
});
exports.deleteTask = deleteTask;
const updateTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const taskId = req.params["task_id"];
    const userId = req.params["user_id"];
    try {
        const user = yield User_1.Users.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const task = yield Task_1.Task.findOneAndUpdate({ _id: taskId, userId: userId }, req.body, { new: true });
        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.status(204).json({ message: "Updated a resource", data: task });
    }
    catch (error) {
        console.error("Error updating task:", error);
        res.status(500).json({ message: "Internal Server Error", error });
    }
});
exports.updateTask = updateTask;
