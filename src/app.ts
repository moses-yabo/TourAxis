import express,{Request,Response} from "express";
import cors from "cors";
import { config } from "dotenv";
import { userRouter } from "./routes/User";
import { run } from "./db/dbConnect";
import { startScheduler } from "./scheduler/taskScheduler";
//import swaggerMiddleware from "./middlewares/swaggerMiddleware"

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:false}));

config();
run();
startScheduler();

app.use("/api/users",userRouter);


app.get("/", async(req:Request,res:Response)=>{
    try {
        res.status(200).json({message:"success",status:200});
    } catch (error) {
        res.status(500).json({message:"Internal server ",status:500});
    }
});

app.listen(port,()=>{    

    console.log(`Server is Running at port ${port}`);
});
