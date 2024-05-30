import { response } from "express";
import User from "../modal/Users.js";



export const addUser= async (request,response)=>{

    try{
        const exists= await User.findOne({sub:request.body.sub})
        if(exists){
           return response.status(200).json("user already exists")
           
        }

        const newUser=new User(request.body)
        await newUser.save();
        response.status(200).json(newUser)

    }
    catch(error){
  response.status(500).json(error);
    }

}

export const getDetails= async (request,response)=>{

    try{
        const users=await User.find({});
        return response.status(200).json(users)
        }
    catch(error){
  response.status(500).json(error);
    }

}





