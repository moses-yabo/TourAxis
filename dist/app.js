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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = require("dotenv");
const User_1 = require("./routes/User");
const dbConnect_1 = require("./db/dbConnect");
const taskScheduler_1 = require("./scheduler/taskScheduler");
//import swaggerMiddleware from "./middlewares/swaggerMiddleware"
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(express_1.default.json());
app.use(cors_1.default);
app.use(express_1.default.urlencoded({ extended: false }));
(0, dotenv_1.config)();
(0, dbConnect_1.run)();
(0, taskScheduler_1.startScheduler)();
//app.use("/api-docs",swaggerMiddleware);
app.use("/api/users", User_1.userRouter);
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).json({ message: "success", status: 200 });
    }
    catch (error) {
        res.status(500).json({ message: "Internal server ", status: 500 });
    }
}));
app.listen(port, () => {
    console.log(`Server is Running at port ${port}`);
});
