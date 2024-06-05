import {RequestHandler}from "express";
import { Users } from './../model/User'


export const getUsers:RequestHandler = async (req,res)=>{
   
        try {
    
            const users = await Users.find({});
            if(!users || users.length === 0)  return res.status(404).json({
                message:"users is not found",
                status:200,
                users:users
            });
            res.status(200).json({message:"success",status:200,users:users});
            
        
            } catch (err) {
                res.status(500).json({message:"internal server Error",status:500,error:err});
            }
    
   
};
export const getUser:RequestHandler = async (req,res)=>{
   
        
        try {
            const userId = req.params["user_id"];
            const user = await Users.findById(userId);

            if(!user) return res.status(404).json({message:"user is not found",status:404}) 
             res.status(200).json({message:"success !!",status:200,data:user});
           
        
        
            } catch (err) {
                res.status(500).json({message:"internal server error",status:500,error:err});
            }
    
   
};
export const createUser:RequestHandler = async (req,res)=>{
    try {
        const user = await Users.create(req.body);
        await user.save();
        if(!user) return res.status(404).json({message:"failed to create a user !",status:404});
        res.status(201).json({message:"Created a user",status:201});

    } catch (error) {
        res.status(500).json({message:"Failed",status:500});
    }
};
export const updateUser: RequestHandler = async (req, res) => {
    try {
        const userId = req.params["user_id"];
        const user = await Users.findOneAndUpdate({ _id: userId }, req.body, { new: true });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User updated successfully!", status: 200, user });

    } catch (err) {
        res.status(500).json({ message: "Internal server error", error: err });
    }
};




