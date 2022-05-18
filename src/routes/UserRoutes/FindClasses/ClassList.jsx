import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import ClassCard from "./ClassCard";
import { ListSubheader, List, Box, Typography, Button, Grid } from '@mui/material'
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";


const languages = [
  {
    value: "french",
    name: "French",
  },
  {
    value: "german",
    name: "German",
  },
];

const levels = [
  {
    value: "beginner",
    name: "Beginner",
  },
  {
    value: "inter",
    name: "Intermediate",
  },
  {
    value: "advanced",
    name: "Advanced",
  },
];

const ClassList = (props) => {
  //   const [open, setOpen] = React.useState(true);
  //   const dispatch = useDispatch();

  const facilityData = [1];

  const [optLevel, setLevelOption] = React.useState("");
  const [optLanguage, setLanguageOption] = React.useState("");

  const handleLanguage = (event) => {
    setLanguageOption(event.target.value);
  };

  const handleLevel = (event) => {
    setLevelOption(event.target.value);
  };

  return (
    <Box
      sx={{
        minWidth: "400px",
        maxWidth: "500px",
        bgcolor: "#F0F5ED",
        p: 4,
        borderRadius: "22px 0px 0px 42px",
      }}
    >
      <Typography variant="h5" color={'secondary'}>Find Classes</Typography>
      <Grid container display={"flex"} flexDirection={"row"}>
          <Grid item xs={6} >
          <FormControl sx={{ m: 1, width:'95%' }} size="small">
            <InputLabel id="demo-select-small">Language</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={optLanguage}
              label="optLanguage"
              onChange={handleLanguage}
            >
              {languages.map((item, index) => (
                <MenuItem key={index} value={item.value}>
                  <Typography>{item.name}</Typography>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          </Grid>
          <Grid item xs={6} >
          <FormControl sx={{ m: 1, width:'95%'}} size="small">
            <InputLabel id="demo-select-small">Level</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={optLevel}
              label="optLevel"
              onChange={handleLevel}
            >
              {levels.map((item, index) => (
                <MenuItem key={index} value={item.value}>
                  <Typography>{item.name}</Typography>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          </Grid>
          
        </Grid>
      <List
        sx={{ width: "100%" }}
        component="nav"
        aria-labelledby="nested-list-subheader"

      >
        {facilityData.map((center, index) => {
          return (
            <ClassCard key={index}/>
          );
        })}
      </List>
    </Box>
  );
};

export default ClassList;
