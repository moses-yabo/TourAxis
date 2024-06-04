"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    id: {
        type: mongoose_1.Types.ObjectId,
    },
    username: {
        type: String,
        min: 3,
        max: 25,
        required: [true, "YOU MUST ENTER A USERNAME !"]
    },
    first_name: {
        type: String,
        min: 3,
        max: 25,
        required: [true, "YOU MUST ENTER A FIRSTNAME !"]
    },
    last_name: {
        type: String,
        min: 3,
        max: 25,
        required: [true, "YOU MUST ENTER A LASTNAME !"]
    }
});
exports.Users = (0, mongoose_1.model)("Users", schema);
