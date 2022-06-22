import { Pets, SearchOutlined } from '@mui/icons-material';
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material'
import  Mail  from '@mui/icons-material/Mail';
import  Notifications  from '@mui/icons-material/Notifications';




import { useState } from 'react';




const StyledToolBar = styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between",
})

const Search = styled("div") (({theme}) =>  ({
  backgroundColor: "white",
  display: "flex",
  alignItems: "center",
  padding:"0 10px",
  borderRadius: theme.shape.borderRadius,
  width:'40%'
}))

const Icons = styled(Box) (({theme}) =>({
  display:"none",
  alignItems:"center",
  justifyContent:"center",
  gap:'20px',
  [theme.breakpoints.up("sm")]: {
    display:'flex',

  }
}))


const UserBox = styled(Box) (({theme}) => ({
  display:"flex",
  alignItems:"center",
  gap:'10px',
   [theme.breakpoints.up("sm")]: {
    display:'none',

  }
}))

const Navbar = () => {


  const [open , setOpen] = useState(false);

  return (
    <AppBar position='sticky'>
      <StyledToolBar>
         <Typography variant="h5" component="h2" sx={{display:{xs:'none' , sm:'block'}}}>
          AvniKaanŞen
        </Typography>
         <Pets  sx={{display:{xs:'block' , sm:'none'}}} />
         <Search>
         <SearchOutlined sx={{color:'darkgray',width :'20px' , height:'20px',marginRight:'5px'}} />
          <InputBase placeholder='Search...' sx={{paddingTop:'2px'}}  />
         </Search>
          <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar onClick={(e) => setOpen(true)} sx={{width :'30px' , height:'30px'}}  src='https://mui.com/static/images/avatar/1.jpg'/>
          </Icons>
          <UserBox onClick={(e) => setOpen(true)}>
          <Avatar sx={{width :'30px' , height:'30px'}}  src='https://mui.com/static/images/avatar/1.jpg'/>
         <Typography variant='span'>John</Typography>
          </UserBox>
      </StyledToolBar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar