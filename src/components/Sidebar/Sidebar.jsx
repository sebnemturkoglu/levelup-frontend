import * as React from 'react';
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


const drawerWidth = 240;

const Sidebar = (props) => {

  let selected = false;
  let setSelected = (selected) => {
    selected = !selected;
  }

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />
      <Grid sx={{ overflow: 'auto', height: 'fill-available' }}
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <List sx={{ width: 'inherit' }}>

          {props.sidebarData.map((item, index) => (
            <ListItem button key={index}
              onClick={setSelected(selected)}
              component={Link} to={item.path}
              selected={selected}
            >
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItem>
          ))}
        </List>
      </Grid>
    </Drawer>
  );
}

export default Sidebar;
