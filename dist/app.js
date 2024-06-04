"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const User_1 = require("./routes/User");
const Task_1 = require("./routes/Task");
const dbConnect_1 = require("./db/dbConnect");
const app = (0, express_1.default)();
const Port = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
(0, dbConnect_1.run)()
    .then((v) => {
})
    .catch(err => {
    new Error(err);
});
app.use("/api/users", User_1.userRouter);
app.use("/api/users/:userId/tasks", Task_1.taskRouter);
app.get("/", (req, res) => {
    if (res.statusCode === 200) {
        res
            .json({
            message: "success",
            status: 200,
        });
    }
    else {
        res
            .status(500)
            .json({
            message: "failed 1",
            status: 500
        });
    }
    ;
});
app.listen(Port, () => {
    console.log(`Server is Running at Port ${Port}`);
});
