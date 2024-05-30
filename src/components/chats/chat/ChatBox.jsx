import { Box } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import ChatHeader from './ChatHeader'
import Messages from './Messages'
import { AccountContext } from '../../../context/AccountProvider'
import { getConversation } from '../../../service/api'

function ChatBox() {

  const {person} = useContext(AccountContext)
  const {account} = useContext(AccountContext)
  
const [conversation,setConversation]=useState({})

useEffect(()=>{

  const getConversationDetials= async()=>{

    let response=await getConversation({senderId:account.sub,recieveId:person.sub})
    setConversation(response)

  }

  getConversationDetials();
},[person.sub])


  return (
    <Box>
        <ChatHeader person={person}/>
        <Messages person={person} account={account} conversation={conversation}/>
        
    </Box>
  )
}

export default ChatBox