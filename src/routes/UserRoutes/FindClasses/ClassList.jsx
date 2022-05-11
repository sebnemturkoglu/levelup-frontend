import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import ClassCard from "./ClassCard";
import { ListSubheader, List, Box, Typography, Button } from '@mui/material'

const ClassList = (props) => {
  //   const [open, setOpen] = React.useState(true);
  //   const dispatch = useDispatch();

  const facilityData = [1, 2, 3, 4];

  return (
    <Box
      sx={{
        minWidth: "350px",
        maxWidth: "500px",
        bgcolor: "#F0F5ED",
        p: 5,
        borderRadius: "22px 0px 0px 42px",
      }}
    >
      <List
        sx={{ width: "100%" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader
            component="div"
            id="nested-list-subheader"
            style={{ backgroundColor: "transparent", color: "#fff" }}
          >
            <Typography variant="h5" color={'secondary'}>Find Classes</Typography>
          </ListSubheader>
        }
      >
        {facilityData.map((center) => {
          return (
            <ClassCard />
          );
        })}
      </List>
    </Box>
  );
};

export default ClassList;
