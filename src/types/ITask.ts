import {ObjectId,} from "mongoose"
export interface ITask<T extends string>{
    id:ObjectId,
    name:T,
    description:T,
    date_time:Date,
    status:T,
    next_execute_date_time:Date
}
