import { Schema, Types,Model,model } from "mongoose";
import {IUser} from "../types/IUser";
const schema:Schema = new Schema<IUser<string>>({
id:{
    type:Types.ObjectId,
    required:true
},
username:{
    type:String,
    min:3,
    max:25,
    required:true
},
first_name:{
    type:String,
    min:3,
    max:25,
    required:true
},
last_name:{
    type:String,
    min:3,
    max:25,
    required:true

}
});
export const Users= model("Users",schema);