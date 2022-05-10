import React from "react";
import { Grid, Box, Typography, Button, TextField } from '@mui/material';
import ClassList from './ClassList';
import { useDispatch, useSelector } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
const listWidth = 500;

const UserFindClasses = () => {
  return (
    <Box
      sx={{
        display: "flex",
        height: "85vh",
      }}
    >
      <Box sx={{ display: "flex", borderRadius: "42px", width: "100%" }}>
        <ClassList width={listWidth} />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            bgcolor: "#fff",
            borderRadius: " 0px 42px 42px 0px",
            p: 3,
            pt: 5,
            height: "100%",
          }}
        >
          <Typography variant="h5" mb={3}>
            {" "}
            Some Course
            {/* Name: {studio.name} */}
          </Typography>
          <Typography variant="body2" mb={3}>
            {" "}
            Description: 
          </Typography>
          <Typography variant="body2" mb={3}>
            {" "}
            Total Quota: 
          </Typography>

          <Typography variant="h6" mb={3}>
            {" "}
            Sessions of 
          </Typography>

          <Box
            sx={{
              bottom: "0px",
              position: "absolute",
              marginBottom: "10vh",
              direction: "column",
            }}
          >
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default UserFindClasses;
