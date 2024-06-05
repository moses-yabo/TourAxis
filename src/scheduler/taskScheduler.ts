import {schedule} from "node-cron";
 import { Task } from "../model/Task"; 
   export const startScheduler = () => {
  
    schedule('* * * * *', async () => {
      try {
        const now = new Date();
        const tasks = await Task.find({ status: 'pending'});
  
        tasks.forEach(async (task) => {
          console.log(`Task to execute: ${task.name}`);
          task.status = 'done';
          await task.save();
        });
      } catch (error) {
        console.error('Error running scheduled job', error);
      }
    });
  
    console.log('Scheduled job started');
  };