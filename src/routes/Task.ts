import { Router } from "express";
import {createTask,getTask,getTasks,updateTask} from "../controllers/Task";
export const taskRouter = Router();
taskRouter
.route("/")
.get(getTasks)
.post(createTask);
taskRouter
.route("/:id")
.get(getTask)
.put(updateTask);

