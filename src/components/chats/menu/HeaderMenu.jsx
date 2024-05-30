import MoreVertIcon from '@mui/icons-material/MoreVert';
import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import styled from '@emotion/styled';
import InfoDrawer from '../../Drawers/InfoDrawer';

function HeaderMenu() {

const [open,setOpen]=useState(null)

 const [openDrawer, setOpenDrawer] = useState(false);


const MenuOptions=styled(MenuItem)`
font-size:15px;
padding: 15px 60px 5px 24px;
color:#4A4A4A;

`

  const handleClick = (e) => {
    setOpen(e.currentTarget);
  };
 const handleClose = () => {
    setOpen(null);
  };

 const toggleDrawer = () => {
        setOpenDrawer(true);
    }



    
  const handleLogout = () => {
    setOpen(null);
    window.location.href = '/';  // Replace '/another-page' with the URL you want to redirect to
  };

    return (
    <>
    
        <MoreVertIcon    onClick={handleClick}/>

         <Menu
        anchorEl={open}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
     slotProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}




      >
        <MenuOptions  onClick={toggleDrawer}>Profile</MenuOptions>
        <MenuOptions onClick={handleLogout}>Logout</MenuOptions>
      </Menu>
       <InfoDrawer  open={openDrawer} setOpen={setOpenDrawer} />


    </>
  )
}

export default HeaderMenu