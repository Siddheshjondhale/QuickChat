import mongoose from "mongoose";


const messageSchema=new mongoose.Schema({

   conversationId: {
        type: String
    },
    senderId: {
        type: String
    },
    recieveId: {
        type: String
    },
    text: {
        type: String
    },
    type: {
        type: String
    }





},
{
    timestamps:true
}


)



const message=mongoose.model('Messages',messageSchema)
export default message