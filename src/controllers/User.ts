import {RequestHandler}from "express";
import { Users } from './../model/User'


export const getUsers:RequestHandler = async (req,res)=>{
   
        try {
    
            const users = await Users.find({});
            if(!users)  return;

            console.log(` ${users}`);

             
            if (res.statusCode === 200){
                res
                .json({
                    message:"success",
                    status:200,
                    location:"User Controller",
                    users:users   
                });
            }
            else{
                res.status(500)
                .json({
                    message:"failed",
                    status:500
                })
            }
        
            } catch (err) {
                console.log(err);
            }
    
   
};
export const getUser:RequestHandler = async (req,res)=>{
   
        const userId = req.params["id"];
        try {
    
            const user = await Users.findById(userId);

            console.log(` ${user}`);

             
            if (res.statusCode === 200){
                res
                .json({
                    message:"success",
                    status:200,
                    data:user 
                });
            }
            else{
                res.status(500)
                .json({
                    message:"failed",
                    status:500
                });
            }
        
            } catch (err) {
                console.log(err);
            }
    
   
};
export const createUser:RequestHandler = async (req,res)=>{
const user = await Users.create(req.body)
console.log(user);

//if(!user) return;
await user.save();
console.log(`status code is  ${res.statusCode}`);

 if(res.statusCode == 200 || res.statusCode >= 201){
    
    res.json({
        message:"Created a user",
        status:201

    });
 }
 else{
    res.status(500).json({
        message:"Failed",
        status:500
    });
 }
};
export const updateUser:RequestHandler = async (req,res)=>{
    const userId = req.params["id"];
    try {
        const user = await Users.updateMany({_id:userId},req.body);
        res.status(204).json({
            message:"updated user !",
            status:204

        })

    } catch (err) {
        res
        .status(500)
        .json({
            message:"Failed !",
            error:err
        })
        throw(err);
    }

}


