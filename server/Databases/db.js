import mongoose from "mongoose";

import dotenv from 'dotenv'
dotenv.config()

const username=process.env.DB_USERNAME
const password=process.env.DB_PASSWORD


export const Connection=async ()=>{


    const URL=`mongodb+srv://${username}:${password}@clonewhatsapp.8gnzlmg.mongodb.net/?retryWrites=true&w=majority&appName=CloneWhatsapp`
try{
await mongoose.connect(URL,{useUnifiedTopology:true})
console.log("Database connected sucessfully")
}
catch(error){
    console.log("Failed to connect to the database due to",error.message)
}
}


