import {
  AppBar,
  Box,
  PaperProps,
  Dialog,
  Toolbar,
  dialogActionsClasses,
  styled,
  ListItem,
  Typography,
  List,
  DialogTitle,
} from "@mui/material";
import { AccountContext } from "../../context/AccountProvider";
import { jwtDecode } from "jwt-decode";
import React from 'react';

import { GoogleLogin } from "@react-oauth/google";
import { useContext } from "react";
import { addUser } from "../../service/api";

export const qrCodeImage =
  "https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg";

const LoginDialog = () => {




  const Header = styled(AppBar)`
    height: 250px;
    background: #42cba5;
    box-shadow: none;
  `;

  const boxComponent = styled(Box)`
    background: #dcdcdc;
  `;

  const dialogComponent = {
    marginTop: "12%",
    height: "95%",
    width: "60%",
    maxWidth: "100%",
    maxHeight: "100%",
    borderRadius: 0,
    boxShadow: 20,
    overflow: "hidden",
  };

  const Components = styled(Box)`
    display: flex;
  `;
  const StyleList = styled(List)``;
  const Title = styled(Typography)`
    font-size: 26px;
    margin-bottom: 25px;
    color: #525252;
    font-family: Segoe UI, Helvetica Neue, Helvetica, Lucida Grande, Arial,
      Ubuntu, Cantarell, Fira Sans, sans-serif;
    font-weight: 300;
  `;

  const Container = styled(Box)`
    padding: 56px 0 56px 56px;
  `;

  const QRCOde = styled("img")({
    margin: "50px 0 0 50px",
    height: 264,
    width: 264,
  });


const {setAccount} = useContext(AccountContext)


const onLoginSucess=async (res)=>{


  const decodejwt=jwtDecode(res.credential)
  setAccount(decodejwt)
await addUser(decodejwt)
  console.log(decodejwt)
}
const onLoginError=(res)=>{
  console.log("Login error",res)

}


  return (
    <boxComponent>
      <Header>
        <Toolbar>
          <Dialog open={true} PaperProps={{ sx: dialogComponent }} hideBackdrop={true}>
            <Components>
              <Container>
                <Title>To use WhatsApp on your computer:</Title>
                <StyleList>
                  <ListItem>1. Open WhatsApp on your phone</ListItem>
                  <ListItem>
                    2. Tap Menu Settings and select WhatsApp Web
                  </ListItem>
                  <ListItem>
                    3. Point your phone to this screen to capture the code
                  </ListItem>
                </StyleList>
              </Container>

              <Container style={{position:"relative"}}>
                <QRCOde src={qrCodeImage} alt="QRCODE" />

                <Box style={{position:"absolute",top:`50%`,transform:`translate(25%)`,width:'auto'}}>
                  <GoogleLogin 
                    onSuccess={onLoginSucess}
                    onError={onLoginError}
                  />
                  ;
                </Box>
              </Container>
            </Components>
          </Dialog>
        </Toolbar>
      </Header>
    </boxComponent>
  );
};

export default LoginDialog;
