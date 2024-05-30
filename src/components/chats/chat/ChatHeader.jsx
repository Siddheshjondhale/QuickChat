import { Box, Typography, hexToRgb, typographyClasses } from "@mui/material";
import React, { useContext } from "react";
import { defaultProfilePicture } from "../../../contents/Data.js";
import SearchIcon from "@mui/icons-material/Search";
import { Height, MoreVert } from "@mui/icons-material";
import styled from "@emotion/styled";
import { AccountContext } from "../../../context/AccountProvider.jsx";


  const Components = styled(Box)`
display:flex;
height:44px,
 align-items: center;
 padding: 8px 16px;
background: #ededee;
`;
  const BoxComponent = styled(Box)``;
  const Typographytext = styled(Typography)`
    padding-left: 10px;
  `;

  const RightComponent = styled(Box)`
    & > svg {
      padding: 9px;
      font-size: 22px;
      color: #000;
    }
    margin-left: auto;
  `;
  const Image = styled("img")({
    Height: 55,
    width: 55,
    borderRadius: "50%",
    objectFit: "cover",
  });
const Name = styled(Typography)`
    margin-left: 12px !important;
`;

const Status = styled(Typography)`
    font-size: 14px !important;
    color: rgb(0, 0, 0, 0.6);
    margin-left: 12px !important;
`;
function ChatHeader({person}) {

  const {active}=useContext(AccountContext)
  return (
    <Components>
      <Image src={person.picture} alt="fdf" />
      <BoxComponent>
        <Name>{person.name}</Name>
        <Status>{active?.find(user=> user.sub=== person.sub) ? 'Online' : 'Offline' }</Status>
      </BoxComponent>
      <RightComponent>
        <SearchIcon />
        <MoreVert />
      </RightComponent>
    </Components>
  );
}

export default ChatHeader;
