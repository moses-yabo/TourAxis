"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    id: {
        type: mongoose_1.Types.ObjectId,
        required: true,
        unique: true
    },
    name: {
        type: String,
        min: 4,
        max: 120,
        required: true
    },
    description: {
        type: String,
        min: 4,
        max: 120,
        required: true
    },
    date_time: {
        type: Date,
        default: Date.now()
    },
    status: {
        type: String,
        default: "pending"
    }
});
exports.Task = (0, mongoose_1.model)("Tasks", schema);
