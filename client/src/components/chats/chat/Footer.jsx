import React, { useEffect, useState } from 'react'
import TagFacesIcon from '@mui/icons-material/TagFaces';
import { Box, Container, InputBase } from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import styled from '@emotion/styled';
import MicIcon from '@mui/icons-material/Mic';
import AttachFile from '@mui/icons-material/AttachFile';
import { uploadFile } from '../../../service/api';

    const Component=styled(Box)`
    display:flex;
    align-items:center;
    height:55px;
    width:100%;
     background: #ededed;
      &  > * {
        margin: 5px;
        color: #919191;
    }
    `
    const IconsComponent=styled(Box)`
    font-size:20px;
    & >svg{
        margin-left:16px;
    }
    `
    const SearchComponent=styled(Box)`

        border-radius: 18px;
    background-color: #FFFFFF;
    width: calc(94% - 100px);

    `
    const InputBaseComponent=styled(InputBase)`
    padding: 20px;
    padding-left: 25px;
    font-size: 14px;
    height: 20px;
    width: 100%;
    
    `
    const ClipIcon = styled(AttachFile)`
    transform: 'rotate(40deg)'
`;


function Footer({sendText,inputValue,setInputValue,file,setFile,setImageFile}) {

useEffect(()=>{
    const   getImage=async ()=>{
        if(file){
            const data=new FormData();
            data.append('name',file.name)
            data.append('file',file)
           const response= await uploadFile(data)
     setImageFile(`https://messagingappserver.onrender.com/file/${response.data.fileName}`);
        console.log(`https://messagingappserver.onrender.com/file/${response.data.fileName}`);

        }
    }
    getImage();
},[file])



const Fileupload=async (e)=>{

    setFile(e.target.files[0])
    setInputValue(e.target.files[0].name)

  console.log(e)
}

  return (
   <Component>

        <IconsComponent>
        <TagFacesIcon/>
           <label htmlFor="fileInput">
                <ClipIcon />
            </label>
        <input type='File' id="fileInput"
        style={{display:'none'}  } onChange={(e)=>Fileupload(e)}
        />


        </IconsComponent>

        <SearchComponent>
            <InputBaseComponent placeholder='Type a message'
             onChange={(e) => setInputValue(e.target.value)}
                    onKeyUp={(e) => sendText(e)}
                    value={inputValue}
            ></InputBaseComponent>
        </SearchComponent>
        <MicIcon/>
   </Component>
  )
}

export default Footer
