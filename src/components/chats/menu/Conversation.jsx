import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import React, { useContext } from 'react'
import {setConversation} from '../../../service/api.js'
import {AccountContext} from '../../../context/AccountProvider'
function Conversation({user}) {


  const {setPerson,account } = useContext(AccountContext)

const BoxComponent=styled(Box)`
  height: 45px;
    display: flex;
    padding: 13px 0;
    cursor: pointer;
    
`

const Image = styled('img') ({
    width: 50,
    height: 50,
    objectFit: 'cover',
    borderRadius: '50%',
    padding: '0 14px'
});


const getUser= async()=>{
setPerson(user)
 
await setConversation({senderId:account.sub,recieveId:user.sub})

}

  return (
    <BoxComponent onClick={()=>getUser()}>
        <Box>
        <Image src={user.picture} alt='No image' />
        </Box>
        <Box  style={{width: '100%'}}>
        <Typography>{user.name}</Typography>
        <Typography></Typography>
        </Box>
    </BoxComponent>
  )
}

export default Conversation