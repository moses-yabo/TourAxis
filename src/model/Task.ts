import { Schema, model } from "mongoose";
import {ITask} from "../types/ITask";
import {Users} from "../model/User";
const schema:Schema = new Schema<ITask<string>>({
userId: { type:Schema.Types.ObjectId , ref: 'Users'},
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
},
next_execute_date_time: { type: Date, required: false },

});
export const Task = model("Tasks",schema);