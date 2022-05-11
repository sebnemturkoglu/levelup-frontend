import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { ListItemButton, Box, Avatar } from '@mui/material';


export default function NativeCard(props) {
  const theme = useTheme();

  return (
    <ListItem alignItems="flex-start" sx={{padding:0, bgcolor: 'background.paper', marginBottom:'12px', borderRadius:'8px'}}>
      <ListItemButton sx={{padding:'8px 12px'}} onClick={props.onClick}>
        <ListItemAvatar sx={{marginRight:'8px'}} >
          <Avatar alt="native-avatar"  src={props.native.avatar}/>
        </ListItemAvatar>
        <ListItemText
          primary={props.native.name}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="caption"
                color="text.primary"
              >
                Average Rating: {props.native.rating}
              </Typography>
            </React.Fragment>
          }
        />
         </ListItemButton>
      </ListItem>
  );
}
