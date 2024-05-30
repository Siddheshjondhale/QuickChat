import axios from 'axios'
// this file sends the datato the back end server which is running on a different port via the same url that is / add`
<<<<<<< HEAD
const url=`https://messagingappserver.onrender.com`
// const url='http://localhost:8000'

=======
const url='http://localhost:8000'
>>>>>>> bb7a127efe8a7f44d2bcd2d39ae998fea459c84d
export const addUser= async (data)=>{

try{
await axios.post(`${url}/add`,data)

}
catch(error){

    console.log("error while adding user", error.message)
}

}
export const getDetails= async ()=>{

try{
let response=await axios.get(`${url}/users`)
return response.data

}
catch(error){

    console.log("error while adding user", error.message)
}

}
export const setConversation= async (data)=>{

try{
await axios.post(`${url}/conversation/add`,data)


}
catch(error){

    console.log("error while adding user", error.message)
}

}


export const getConversation=async(data)=>{

    try{
        let response=await axios.post(`${url}/conversation/get`,data)
        return response.data
    }
    catch(error){
        console.log('error while getting conversation',error.message)
    }
    
}



export const newMessage=async(data)=>{


try{
        await axios.post(`${url}/message/add`,data)
}
catch(error){
    console.log("error while sending new message")
}

}





export const getMessages=async(id)=>{


try{
       let messagesall= await axios.get(`${url}/message/get/${id}`)
       return messagesall.data
        
}
catch(error){
    console.log("error while sending new message")
}

}

export const uploadFile=async(data)=>{


    try{
   return await axios.post(`${url}/file/upload`,data)

    }catch(e){
    console.log(e.message)

    }
}