import {ObjectId, Schema,} from "mongoose"
import {Users} from "../model/User"
export interface ITask<T extends string>{
    userId:Schema.Types.ObjectId,
    name:T,
    description:T,
    date_time:Date,
    status:T,
    next_execute_date_time?:Date
}
