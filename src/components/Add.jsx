import React from 'react'
import Tooltip from '@mui/material/Tooltip';
import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, styled, Typography } from '@mui/material';
import {Add as AddIcon, EmojiEmotions} from '@mui/icons-material';
import TextField from '@mui/material/TextField';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ImageIcon from '@mui/icons-material/Image';
import DateRangeIcon from '@mui/icons-material/DateRange';



const Add = () => {

    const [open, setOpen] = React.useState(false);

    const style = {
        display:'flex',
        flexDirection:'column',
        width: '480px',
        height: '300px',
        color: 'gray',
        borderRadius: '4px',
        boxShadow: '0px 2px 44px rgba(0, 0, 0, 0.5)',
        padding: '20px',
        textAlign: 'center',
      };

      const StyledModel = styled(Modal)({
        display:'flex',
        justifyContent:'center',
        alignItems: 'center',
      });


      const UserBox = styled(Box)({
        display:'flex',
        alignItems: 'center',
        gap:'10px',
        marginBottom: '20px',
      });



  return (
    <>
     <Tooltip
     title="Add"
     onClick={() => setOpen(true)}
     sx={{position:'fixed' , bottom:20, left:{xs:"calc(50% - 5px)" , md:30}}}>
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
     </Tooltip>
     <StyledModel
  open={open}
  onClose={() => setOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box style={style} bgcolor={"background.default"} color={'text.primary'} >
    <Typography id="modal-modal-title" variant="h6" >
      Create Post
    </Typography>
    <UserBox>
        <Avatar
        src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        sx={{width:30, height:30}}></Avatar>
         <Typography fontWeight={500} variant="span">
                John Doe
        </Typography>
    </UserBox>
    <TextField
    sx={{width:'100%'}}
          id="standard-multiline-static"
          multiline
          rows={3}
          placeholder="What's on your mind?"
          variant="standard"
        />
        <Stack direction='row' gap={1} mt={2} mb={3} color={'black'}>
          <EmojiEmotions color="primary" />
          <ImageIcon color='secondary' />
          <VideoCameraBackIcon color='success' />
          <PersonAddIcon color='error' />
        </Stack>

        <ButtonGroup
          variant="contained"
          fullWidth
          aria-label="outlined primary button group"
          >
          <Button sx={{marginRight:'5px'}}>Post</Button>
          <Button sx={{width:'100px'}}><DateRangeIcon /></Button>
        </ButtonGroup>

  </Box>
</StyledModel>
    </>
  )
}

export default Add