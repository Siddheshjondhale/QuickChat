import React, { useContext, useState } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import { Box, useScrollTrigger } from "@mui/material";
import styled from "@emotion/styled";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Search from "./Search";
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import HeaderMenu from "./HeaderMenu";
import InfoDrawer from "../../Drawers/InfoDrawer";




const Component = styled(Box)`
    height: 44px;
    background: #ededed;
    display: flex;
    padding: 8px 16px;
    align-items: center;
`;

const Wrapper = styled(Box) `
    margin-left: auto;
    & > * {
        margin-left: 2px;
        padding: 8px;
        color: #000;
    };
    & :first-child {
        font-size: 22px;
        margin-right: 8px;
        margin-top: 3px;
    }
`;
    
const Image = styled('img') ({
    height: 40,
    width: 40,
    borderRadius: '50%'
})

function Header() {
  const { account } = useContext(AccountContext); // taking context from accountprovider to get the imiage from usergmail id
 const [openDrawer, setOpenDrawer] = useState(false);

    const toggleDrawer = () => {
        setOpenDrawer(true);
    }
  return (
    <>
      <Component>
        <Image src={account.picture} alt="image not displayed" onClick={toggleDrawer} />
        <Wrapper>
        <RadioButtonCheckedIcon/>
          <ChatIcon />
          <HeaderMenu/>
        </Wrapper>
        <InfoDrawer  open={openDrawer} setOpen={setOpenDrawer} />
      </Component>
    </>
  );
}

export default Header;
