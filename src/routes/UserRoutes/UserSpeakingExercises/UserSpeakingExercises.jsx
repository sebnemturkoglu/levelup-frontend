import React, { useState, useEffect, navigate } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from 'react-router-dom'
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";

const columns = [
    { field: "insName", headerName: "Instructor Name", width: 240 },
    { field: "date", headerName: "Exercise Date", width: 200 },
    {
        field: "link",
        headerName: "Exercise Link",
        width: 240,
        renderCell: (params) => {
          return <a>Go to exercise</a>; 
        },
    },
    {
      field: "grade",
      headerName: "Grade",
      width: 150,
    },
    {
      field: "rate",
      headerName: "Rate",
      width: 130,
    },
  ];

const UserSpeakingExercises = () => {

//   const dispatch = useDispatch();
const navigate = useNavigate();

//   const speakingExercises = useSelector((state) => state.speakingExercises);
  const [tab, setTab] = useState('all');
  const rows = [];


//   useEffect(() => {
    // dispatch(fetchAllSpekingExercises());
//   }, [dispatch, dataCourse]);

const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };


  return (
    <div>
      <Box sx={{ width: "100%", bgcolor: "#fff", paddingTop:'24px'}}>
        <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'} >
        <Typography variant="h5" color={'secondary'} sx={{marginLeft:'24px'}} >Speaking Exercises</Typography>
        <Button variant="contained" color="secondary" sx={{marginRight:'14px'}} onClick={() => {navigate('/user/speaking-lessons/new-exercise')}}>Request New Exercise</Button>
        </Box>
        <Tabs
          value={tab}
          sx={{marginLeft:'24px'}}
          indicatorColor="primary"
          onChange={handleTabChange}
        >
          <Tab value="all" label="All" />
          <Tab value="upcoming" label="Upcoming" />
          <Tab value="reqs" label="Requests" />
        </Tabs>
        <div style={{ height: "70vh", width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            disableSelectionOnClick
          />
        </div>
      </Box>
    </div>
  );
};

export default UserSpeakingExercises;
