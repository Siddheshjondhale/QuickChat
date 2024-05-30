import { Box, Icon, InputBase, TextField } from "@mui/material";
import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import styled from "@emotion/styled";

    
const Components=styled(Box)`
background: #fff;
display:flex;
height: 45px;
align-items:center;
border-bottom: 1px solid #F2F2F2;
`
const Wrapper=styled(Box)`
position:relative;
 border-radius: 10px;
    background-color: #f0f2f5;
    margin: 0 13px;
    width: 100%;    
`


const Iconss=styled(Box)`
  color: #919191;
    padding: 8px;
    height: 100%;
    position: absolute;
`
const InputField = styled(InputBase) `
    width: 100%;
    padding: 18px;
    padding-left: 50px;
    font-size: 14px;
    height: 15px;
    width: 100%;
`;

function Search( {text,setText}) {

  return (
    <Components>
      <Wrapper>
        <Iconss>
        <SearchIcon fontSize="small"/>

      </Iconss>
        <InputField placeholder="Search or start new chat" 
        value={text}
       onChange={(e)=>setText(e.target.value)}
        />

      </Wrapper>
    </Components>
  );
}

export default Search;
