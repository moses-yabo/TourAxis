"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    id: {
        type: mongoose_1.Types.ObjectId,
        required: true
    },
    username: {
        type: String,
        min: 3,
        max: 25,
        required: true
    },
    first_name: {
        type: String,
        min: 3,
        max: 25,
        required: true
    },
    last_name: {
        type: String,
        min: 3,
        max: 25,
        required: true
    }
});
exports.Users = (0, mongoose_1.model)("Users", schema);
