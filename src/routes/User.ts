import { Router } from "express";
import {  } from "../controllers/User";


import {createUser,getUsers,getUser,updateUser} from "../controllers/User";
export const userRouter = Router();
userRouter
.route("/")
.get(getUsers)
.post(createUser);
userRouter
.route("/:id")
.get(getUser)
.put(updateUser);


