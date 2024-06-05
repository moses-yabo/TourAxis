import { connect } from "mongoose";
 export  const run = async ()=>{
    const dburi = process.env.DB_CONNECTION_STRING ;
    const dbpassword = process.env.DB_PASSWORD; 
    await connect((dburi as string).replace("<password>",dbpassword as string),{
        dbName: 'TourAxis'
    })
    .then(()=>{
        console.log("db connected 🙌🙌🙌");
    })
    .catch((err)=>{
    console.log(`failed to connect ! ${err}`);
    });
};