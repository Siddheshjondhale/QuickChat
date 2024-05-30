import { Box, Typography, boxClasses } from "@mui/material";
import React, { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";
import styled from "@emotion/styled";

function Profile() {
  const { account } = useContext(AccountContext);

  const Components = styled(Box)(`
     width:100%;
     display:flex;
     justify-content:center;
`);

  const Image = styled("img")({
    height: 170,
    width: 170,
    padding: "25px 0px",
    borderRadius: "50%",
  });

  const BoxDescription = styled(Box)`
    padding: 15px 20px 28px 30px;

    & > p {
      font-size: 13px;
      color: #8696a0;
    }
  `;

  const BoxWrapper = styled(Box)`
    background: #ffffff;
    padding: 15px 10px 10px 25px;

    & :first-child {
      font-size: 13px;
      font-weight: 200;
      color: #009688;
    }

    & :last-child {
      margin: 10px 0px;
      font-size: 16px;
      color: #000;
    }
  `;
  return (
    <>
      <Components>
        <Image src={account.picture} alt="No image "></Image>
      </Components>
      <BoxWrapper>
        <Typography>Your name</Typography>
        <Box>
          <Typography>{account.name}</Typography>
        </Box>
      </BoxWrapper>
      <BoxDescription>
        <Typography>
          This is not your username or pin. This name will be visible to your
          WhatsApp contacts.
        </Typography>
      </BoxDescription>
      <BoxWrapper>
        <Typography>About</Typography>
        <Typography>Code! Compete! Conquer!</Typography>
      </BoxWrapper>
    </>
  );
}

export default Profile;
