import Conversation from "../modal/Conversation.js";
import { response } from "express";

export const newConversation = async (request, response) => {
  try {
    let senderId = request.body.senderId;
    let recieveId = request.body.recieveId;

    const exists = await Conversation.findOne({
      members: { $all: [senderId, recieveId] },
    });

    if (exists) {
      return response.status(200).json("Conversation already exists");
    }

    const newConversation = new Conversation({
      members: [senderId, recieveId],
    });
    await newConversation.save();
    response.status(200).json("Conversation created");
  } catch (error) {
    response.status(500).json(error);
  }
};



export const getConversation= async (request,response)=>{

try{
   
 let senderId = request.body.senderId;
  let recieveId = request.body.recieveId;

 const exists = await Conversation.findOne({
      members: { $all: [senderId, recieveId] },
    });

    if(exists){
      return response.status(200).json(exists)
    }

    response.status(500).json("error while getting conversation")


}
catch(error){
  console.log(error)
}



}