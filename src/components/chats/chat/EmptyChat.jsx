import { Box, Divider, Typography } from '@mui/material'
import React from 'react'
import { emptyChatImage } from '../../../contents/Data'
import styled from '@emotion/styled'
import { Height } from '@mui/icons-material'



  const BoxContainer=styled(Box)  `
  height:100vh;
  text-align:center;  
  display:flex;
  align-items:center;
  justify-content:center;

  `
  const BoxImage=styled(Box)`
  
  `
  const Image=styled('img')({

    width:400,
    Height:400,
  })

  const Title = styled(Typography)`
    font-size: 32px;
    font-family: inherit;
    font-weight: 300;
    color: #41525d;
    margin-top: 25px 0 10px 0;
`;

const SubTitle = styled(Typography)`
    font-size: 14px;
    color: #667781;
    font-weight: 400;
    font-family: inherit;
`;

const StyledDivider = styled(Divider)`
    margin: 40px 0;
    opacity: 4;
`;
function EmptyChat() {

  return (
   <>
   <BoxContainer>
    <BoxImage>

      <Image src={emptyChatImage}/>
       <Title>WhatsApp Web</Title>
                <SubTitle>Now send and receive messages without keeping your phone online.</SubTitle>
                <SubTitle>Use WhatsApp on up to 4 linked devices and 1 phone at the same time. </SubTitle>
                <StyledDivider />
    </BoxImage>
   </BoxContainer>
   </>
  )
}

export default EmptyChat