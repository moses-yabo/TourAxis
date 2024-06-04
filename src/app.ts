import express,{Request,Response} from "express";
import { userRouter } from "./routes/User";
import { taskRouter } from "./routes/Task";
import { run } from "./db/dbConnect";

const app = express();
const Port = process.env.PORT ?? 3000;
app.use(express.json());
app.use(express.urlencoded({extended:false}));
run()
.then((v)=>{

})
.catch(err=>{
    new Error(err);
})
;
app.use("/api/users",userRouter);
app.use("/api/users/:userId/tasks",taskRouter);


app.get("/",(req:Request,res:Response)=>{
   
    if (res.statusCode === 200){
        res
        .json({
            message:"success",
            status:200,
            
        });
    
}
else{

    res
    .status(500)
    .json({
        message:"failed 1",
        status:500
    })
}
;
});

app.listen(Port,()=>{    

    console.log(`Server is Running at Port ${Port}`);
});
