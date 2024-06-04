import { Schema, Types,Model,model } from "mongoose";
import {IUser} from "../types/IUser";
const schema:Schema = new Schema<IUser<string>>({
id:{
    type:Types.ObjectId,
    
},
username:{
    type:String,
    min:3,
    max:25,
    required:[true,"YOU MUST ENTER A USERNAME !"]
},
first_name:{
    type:String,
    min:3,
    max:25,
    required:[true,"YOU MUST ENTER A FIRSTNAME !"]
},
last_name:{
    type:String,
    min:3,
    max:25,
    required:[true,"YOU MUST ENTER A LASTNAME !"]

}
});
export const Users = model<IUser<string>>("Users",schema);