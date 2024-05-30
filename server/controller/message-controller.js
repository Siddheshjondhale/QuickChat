import conversation from "../modal/Conversation.js";
import message from "../modal/Messages.js";

export const newMessage= async (request,response)=>{

    try{
        
      const messageSave=new message(request.body)

      await messageSave.save();
      await conversation.findByIdAndUpdate(request.body.conversationId,{message:request.body.text})
      return response.status(200).json("Message send sucessfully");


        }
    catch(error){
  response.status(500).json("Message not send ",error);
    }

}

export const getMessages= async (request,response)=>{

    try{
        
     const messages= await message.find({conversationId:request.params.id})
        response.status(200).json(messages)
        }
    catch(error){
  response.status(500).json("Message not send ",error);
    }

}





