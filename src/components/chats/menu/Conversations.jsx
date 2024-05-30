    import React, { useContext, useEffect, useState } from 'react'
    import {getDetails} from '../../../service/api.js'
    import { Box } from '@mui/material'
    import Conversation from './Conversation.jsx'
    import { AccountContext } from '../../../context/AccountProvider.jsx'
    function Conversations({text}) {

        const {account, socket, setActive}=useContext(AccountContext)
        const [users,setUsers]=useState([])

        useEffect(()=>{
            socket.current.emit('addUsers',account)
            socket.current.on('getUsers',user=>{
            setActive(user)
            })
        },[account])

        useEffect(()=>{
            const usersGet= async()=>{
                let response=await getDetails();
                let fiteredData = response.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
                setUsers(fiteredData);
            }
            usersGet(); 

        },[text])
    return (
            <Box>
                {
                users.map(user=>(
                    user.sub!=account.sub ? 
                    <Conversation user={user}/> : null
                ))
                }
            </Box>
    )
    }

    export default Conversations