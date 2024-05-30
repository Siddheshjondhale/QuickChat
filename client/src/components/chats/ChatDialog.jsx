import { Box, Dialog, getTableRowUtilityClass, styled } from "@mui/material";
import React, { useContext } from "react";
import { Component } from "react";
import EmptyChat from "./chat/EmptyChat";
import Menu from "./menu/Menu";
import ChatBox from "./chat/ChatBox";
import { AccountContext } from "../../context/AccountProvider";


 const Components = styled(Box)`
    display: flex;
  `;
  const LeftComponents = styled(Box)`
    min-width: 450px;
    
  `;
  const RightComponents = styled(Box)`
    width: 73%;
    height: 100%;
    min-width: 300px;
    border-left: 1px solid rgba(0, 0, 0, 0.14);
  `;

  const dialogComponent = {
    height: "95%",
    width: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    borderRadius: 0,
    boxShadow: 20,
    overflow: "hidden",
  };



function ChatDialog() {

  const {person}= useContext(AccountContext)
 

  return (
    <>
      <Dialog
        open={true}
        PaperProps={{ sx: dialogComponent }}
        hideBackdrop={true}
      >
        <Components>
          <LeftComponents>
            <Menu/>

          </LeftComponents>

          <RightComponents>
          {Object.keys(person).length ? <ChatBox/> : <EmptyChat/>}
            {/* <EmptyChat /> */}
            <ChatBox/>  
          </RightComponents>
        </Components>
      </Dialog>
    </>
  );
}

export default ChatDialog;
