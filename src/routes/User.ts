import { Router } from "express";
import {createUser,getUsers,getUser,updateUser} from "../controllers/User";
import { taskRouter } from "../routes/Task";
export const userRouter = Router();
userRouter
.route("/")
.get(getUsers)
.post(createUser);
userRouter
.route("/:user_id")
.get(getUser)
.put(updateUser);
userRouter.use("/:user_id/tasks",taskRouter)
