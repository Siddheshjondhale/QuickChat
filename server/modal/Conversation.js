import mongoose, { Schema } from "mongoose";


const ConversationSchema=new mongoose.Schema({

    members:{
        type:Array
    },
    message:{
        type:String
    }



},
{
    timestamps:true
}

)



const conversation=mongoose.model('Conversations',ConversationSchema)


export default conversation






