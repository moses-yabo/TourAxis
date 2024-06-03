import { Schema, Types,model } from "mongoose";
import {ITask} from "../types/ITask";
const schema:Schema = new Schema<ITask<string>>({
id:{
    type:Types.ObjectId,
    required:true,
    unique:true
},
name:{
    type:String,
    min:4,
    max:120,
    required:true

},
description:{
    type:String,
    min:4,
    max:120,
    required:true
},
date_time:{
    type: Date,
    default:Date.now()

},
status:{
    type:String,
    default:"pending"
}
});
export const Task = model("Tasks",schema);