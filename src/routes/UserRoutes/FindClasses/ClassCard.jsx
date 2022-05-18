import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import CardImage from "../../../assets/CourseCardImage.png";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { ListItemButton, Box } from '@mui/material';

export default function ClassCard() {
  const theme = useTheme();

  return (
    <ListItem alignItems="flex-start" sx={{padding:0, bgcolor: 'background.paper', marginBottom:'12px', borderRadius:'8px'}}>
      <ListItemButton sx={{padding:'8px 12px'}}>
        <ListItemAvatar sx={{marginRight:'8px'}} >
          <img src={CardImage}  />
        </ListItemAvatar>
        <ListItemText
          primary="Writing for DELF B1"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="caption"
                color="text.primary"
              >
                Instructor: Sırma Kuzukulak
              </Typography>
              {/* <Box>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="caption"
                color="text.primary"
              >
                Duration: 6 weeks
              </Typography>
              <Typography
                sx={{ display: 'inline', marginLeft:'64px', right:0 }}
                component="span"
                variant="caption"
                color="text.primary"
              >
                Intermediate
              </Typography>
              
              </Box> */}
            </React.Fragment>
          }
        />
         </ListItemButton>
      </ListItem>
  );
}
