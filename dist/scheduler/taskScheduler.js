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
exports.startScheduler = void 0;
const node_cron_1 = require("node-cron");
const Task_1 = require("../model/Task");
const startScheduler = () => {
    (0, node_cron_1.schedule)('* * * * *', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const now = new Date();
            const tasks = yield Task_1.Task.find({ status: 'pending' });
            tasks.forEach((task) => __awaiter(void 0, void 0, void 0, function* () {
                console.log(`Task to execute: ${task.name}`);
                task.status = 'done';
                yield task.save();
            }));
        }
        catch (error) {
            console.error('Error running scheduled job', error);
        }
    }));
    console.log('Scheduled job started');
};
exports.startScheduler = startScheduler;
