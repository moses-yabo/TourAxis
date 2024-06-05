import { Router } from "express";
import {createTask,getTask,getTasks,updateTask,deleteTask} from "../controllers/Task";
export const taskRouter = Router({mergeParams:true});

taskRouter
.route("/")
.get(getTasks)
.post(createTask);
taskRouter
.route("/:task_id")
.get(getTask)
.put(updateTask)
.delete(deleteTask);

