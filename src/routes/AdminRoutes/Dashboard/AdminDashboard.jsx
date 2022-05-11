import React, { useState, useEffect } from "react";
import DataCard from "./DataCard";
import { Box, Typography, Grid, Button } from "@mui/material";
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

const data = [
    {
        name: 'Number of students learning French:',
        data: 143
    },
    {
        name: 'Speaking exercise average of French students:',
        data: 87.72
    },
    {
        name: 'Homework average of intermediate students',
        data: 84.96
    }
]

const AdminDashboard = () => {
  const [optLevel, setLevelOption] = React.useState("");
  const [optLanguage, setLanguageOption] = React.useState("");

  const handleLanguage = (event) => {
    setLanguageOption(event.target.value);
  };

  const handleLevel = (event) => {
    setLevelOption(event.target.value);
  };

  return (
    <Box sx={{ display: "flex", width: "100%", height: "85vh" }}>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "#fff",
          borderRadius: " 20px",
          p: 3,
          pt: 5,
          height: "100%",
        }}
      >
        <Typography variant="h5" mb={3} color="secondary">
          System Report for 07.04.2022
        </Typography>
        <Box display={"flex"} flexDirection={"row"}>
          <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
            <InputLabel id="demo-select-small">Choose Language</InputLabel>
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
          <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
            <InputLabel id="demo-select-small">Choose Level</InputLabel>
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
          <FormControl sx={{ m: 1, minWidth: 70 }} size="small">
          <Button variant="contained" sx={{color:'#fff'}}>Create Report</Button>
          </FormControl>
          
        </Box>

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {data.map((item, index) => (
                <Grid item xs={4}>
                <DataCard name={item.name} data={item.data} />
              </Grid>
              ))}
          
        </Grid>
      </Box>
    </Box>
  );
};

export default AdminDashboard;
