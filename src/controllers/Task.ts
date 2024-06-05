import {RequestHandler} from "express";
import { Task } from './../model/Task';
import {Users} from "../model/User";

export const getTasks: RequestHandler = async (req, res) => {
    const userId = req.params.user_id;

    try {
        const user = await Users.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const tasks = await Task.find({ userId: userId });

        if (!tasks || tasks.length === 0) {
            return res.status(404).json({ message: "No tasks found for this user" });
        }

        res.status(200).json({ message: "Success", data: tasks });
    } catch (error) {
        console.error("Error fetching tasks:", error);
        res.status(500).json({ message: "Internal Server Error", error });
    }
};
               

export const getTask:RequestHandler = async(req,res)=>{
    
    const user_id = req.params.user_id;
    const task_id = req.params.task_id;
    
    try {
        const user = await Users.findById(user_id);
        if (!user)return res.status(404).json({ message: "User not found" });


        const task = await Task.findOne({ _id: task_id, userId: user_id });

        if (!task) return res.status(404).json({ message: "Task not found" });
        

        res.status(200).json({ message: "Success", data: task });
    } catch (error) {
        console.error("Error fetching task:", error);
        res.status(500).json({ message: "Internal Server Error", error});

    }
};
        
    



export const createTask: RequestHandler = async (req, res) => {
    const userId = req.params['user_id'];

    try {
        const user = await Users.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found", status: 404 });
        }

        const task = new Task({
            ...req.body,
            userId: userId
        });


        await task.save();
        res.status(201).json({ message: "Task created", data: task });

        console.log(task);
    } catch (error) {
        console.error("Error creating task:", error);
        res.status(500).json({ message: "Internal Server Error", error: error });

    }
};

export const deleteTask: RequestHandler = async (req, res) => {
    const userId = req.params['user_id'];
    const taskId = req.params['task_id'];

    try {
        const user = await Users.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found", status: 404 });
        }

        const task = await Task.findOneAndDelete({ _id: taskId, userId: userId });
        if (!task) {
            return res.status(404).json({ message: "Task not found", status: 404 });
        }

        res.status(204).json({ message: "Task deleted successfully", data: task });
    } catch (error) {
        console.error("Error deleting task:", error);
        res.status(500).json({ message: "Internal Server Error", error: error });
    }
};




   
    


export const updateTask: RequestHandler = async (req, res) => {
    const taskId = req.params["task_id"];
    const userId = req.params["user_id"];

    try {
        const user = await Users.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const task = await Task.findOneAndUpdate(
            { _id: taskId, userId: userId },
            req.body,
            { new: true }
        );

        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }

        res.status(204).json({ message: "Updated a resource", data: task });
    } catch (error) {
        console.error("Error updating task:", error);
        res.status(500).json({ message: "Internal Server Error", error });
    }
};
    
    


