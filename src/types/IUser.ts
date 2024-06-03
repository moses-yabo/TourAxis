import {ObjectId,} from "mongoose"
export interface IUser<T extends string>{
    id:ObjectId,
    username:T,
    first_name:T,
    last_name:T
}