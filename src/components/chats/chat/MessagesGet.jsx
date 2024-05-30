
import React, { useContext } from 'react'
import { Box,Container,styled, Typography } from '@mui/material'
import { downloadFile,DateFormat } from '../../../utils/common-utils';
import { AccountContext } from '../../../context/AccountProvider';

import GetApp from '@mui/icons-material/GetApp';
import { iconPDF } from '../../../contents/Data';

const Own = styled(Box)`
    background: #dcf8c6;
    padding: 6px;
    max-width: 60%;
    width: fit-content;
    margin:2px 0px 2px 0px;
    margin-left: auto;
    display: flex;
    border-radius: 14px;
    word-break: break-word;   //    word-break: break-word; is used to break the line in case of it goes beyond the max width
`;
const Wrappers = styled(Box)`
    background: #ffffff;
    padding: 6px;
    max-width: 60%;
    margin:2px 0px 2px 0px;
    width: fit-content;
    margin-right: auto;
    display: flex;
    border-radius: 14px;
    word-break: break-word;   //    word-break: break-word; is used to break the line in case of it goes beyond the max width
`;
const Time = styled(Typography)`
    font-size: 10px;
    color: #919191;
    margin-top: 6px;
    word-break: keep-all;
    margin-top: auto;
`;
const Timeforimage = styled(Typography)`
    font-size: 10px;
    color: #919191;
    margin-top: 6px;
    margin-left:10px;
    word-break: keep-all;
    margin-top: auto;
`;
const Texts = styled(Typography)`
    font-size: 14px;
    padding: 0 25px 0 5px;
`;

const Containers=styled(Container)`
    padding:0.5px 20px 0.5px 20px;


`

export default function MessagesGet({message}) {

  const {account } = useContext(AccountContext)


  return (
  <>
      <Containers>
  {
    account.sub==message.senderId ?
          <Own>   
            {
                message.type=='file'? <ImageFileMessage message={message}/> :<TextMessage message={message}/>
            }
              
              </Own>

      :
      <Wrappers>   
               {
                message.type=='file'? <ImageFileMessage message={message}/> :<TextMessage message={message}/>
            }
              
      </Wrappers>
      }
      </Containers>
  </>

   
    
  )
}



const ImageFileMessage = ({ message }) => {
    const openInNewTab = () => {
        window.open(message.text, '_blank');
    };


    return (
        <Box style={{ position: 'relative' }}>
            {message?.text?.includes('.pdf') ? (
                <Box style={{ display: 'flex',cursor:'pointer' }} onClick={openInNewTab}>
                    <img src={iconPDF} alt='pdf' style={{ width: 80 }} />
                    <Typography style={{ fontSize: 14 }}>
                        {message.text.split('/').pop()}
                    </Typography>
                </Box>
            ) : (
              
                    <img onClick={openInNewTab}
                        style={{ width: 300, height: '100%', objectFit: 'cover',cursor:'pointer' }}
                        src={message.text}
                        alt={message.text}
                    />
               
            )}

            <Timeforimage style={{ position: 'absolute', right: 0, bottom: 0,cursor:'pointer' }}>
                <GetApp
                    onClick={(e)=>downloadFile(e,message.text)}
                    style={{
                        marginRight: 10,
                        borderRadius: 50,
                        border: '1px grey solid',
                        fontSize: 15,
                    }}
                />
                {DateFormat(message.createdAt)}
            </Timeforimage>
        </Box>
    );
};


const TextMessage=({message})=>{
return(


<>

<Texts>{message.text}</Texts>
<Time >{DateFormat(message.createdAt)}</Time>

</>

)

    }


