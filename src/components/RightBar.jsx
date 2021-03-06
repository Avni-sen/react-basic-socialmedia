import React from 'react';
import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';



const RightBar = () => {

  const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
    }
  ];



  return (
    <Box  flex={2} p={2} sx={{display : {xs : 'none', sm:'block'}}}>
      <Box position="fixed"  width={300}>
        <Typography variant='h6' fontWeight={100} >Online Friends</Typography>
    <AvatarGroup sx={{marginTop:'16px'}} max={7}>
      <Avatar alt="Remy Sharp" src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Prescription01&hairColor=Black&facialHairType=BeardMajestic&facialHairColor=BrownDark&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'" />
      <Avatar alt="Travis Howard" src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairBob&accessoriesType=Round&hairColor=Platinum&facialHairType=Blank&clotheType=Overall&clotheColor=PastelGreen&eyeType=Squint&eyebrowType=Default&mouthType=Default&skinColor=Light'" />
      <Avatar alt="Cindy Baker" src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairFro&accessoriesType=Prescription02&hairColor=Brown&facialHairType=Blank&clotheType=GraphicShirt&clotheColor=Black&graphicType=Resist&eyeType=Hearts&eyebrowType=Default&mouthType=Default&skinColor=Light'" />
      <Avatar alt="Remy Sharp" src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Prescription01&hairColor=Black&facialHairType=BeardMajestic&facialHairColor=BrownDark&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'" />
      <Avatar alt="Travis Howard" src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairBob&accessoriesType=Round&hairColor=Platinum&facialHairType=Blank&clotheType=Overall&clotheColor=PastelGreen&eyeType=Squint&eyebrowType=Default&mouthType=Default&skinColor=Light'" />
      <Avatar alt="Remy Sharp" src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Prescription01&hairColor=Black&facialHairType=BeardMajestic&facialHairColor=BrownDark&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'" />
      <Avatar alt="Travis Howard" src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairBob&accessoriesType=Round&hairColor=Platinum&facialHairType=Blank&clotheType=Overall&clotheColor=PastelGreen&eyeType=Squint&eyebrowType=Default&mouthType=Default&skinColor=Light'" />
      <Avatar alt="Cindy Baker" src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairFro&accessoriesType=Prescription02&hairColor=Brown&facialHairType=Blank&clotheType=GraphicShirt&clotheColor=Black&graphicType=Resist&eyeType=Hearts&eyebrowType=Default&mouthType=Default&skinColor=Light'" /> <Avatar alt="Remy Sharp" src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Prescription01&hairColor=Black&facialHairType=BeardMajestic&facialHairColor=BrownDark&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'" />
    </AvatarGroup>
    <Typography mt={2} mb={2} variant='h6' fontWeight={100} >Latest Photos</Typography>
    <ImageList cols={3}  rowHeight={100} gap={5}>
      {itemData.map((item) => (
        <ImageListItem sx={{cursor:'pointer'}} key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
    <Typography mt={1} variant='h6' fontWeight={100} >Latest Conversations</Typography>
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper',color:'#fff' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairBob&accessoriesType=Round&hairColor=Platinum&facialHairType=Blank&clotheType=Overall&clotheColor=PastelGreen&eyeType=Squint&eyebrowType=Default&mouthType=Default&skinColor=Light'" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" ??? I'll be in your neighborhood doing errands this???"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard"  src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Prescription01&hairColor=Black&facialHairType=BeardMajestic&facialHairColor=BrownDark&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" ??? Wish I could come, but I'm out of town this???"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Prescription01&hairColor=Black&facialHairType=BeardMajestic&facialHairColor=BrownDark&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' ??? Do you have Paris recommendations? Have you ever???'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      </Box>
    </Box>
  )
}

export default RightBar