import { connect } from "mongoose";
 export  const run = async ()=>{
    
    await connect("mongodb+srv://touraxis:LMFY07804316078043@touraxis.fggzinj.mongodb.net/",{
        dbName: 'TourAxis'
    })
    .then(()=>{
        console.log("db connected 🙌🙌🙌");
    })
    .catch((err)=>{
    console.log(`failed to connect ! ${err}`);
    })
    ;
};