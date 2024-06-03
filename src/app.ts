import express from "express";



const app = express();
const Port = process.env.PORT ?? 3000;
app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.get("/",(req,res)=>{

    console.log("helo")
    res.json({
        status:"success",
        code:201
    })
});

app.listen(Port,()=>{    
    
    if (Port == undefined) return;
    
    console.log(`Listening at localhost:/${Port}`)
},)