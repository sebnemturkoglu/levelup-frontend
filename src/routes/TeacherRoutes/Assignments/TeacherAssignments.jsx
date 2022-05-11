import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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

const TeacherAssignments = () => {

//   const dispatch = useDispatch();

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
      <Box sx={{ width: "100%", bgcolor: "#fff", paddingTop:'24px', borderRadius:'20px'}}>
        <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'} >
        <Typography variant="h5" color={'secondary'} sx={{marginLeft:'24px'}} >Assignments</Typography>
        <Button variant="contained" color="secondary" sx={{marginRight:'14px'}} >Assign Homework</Button>
        </Box>
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

export default TeacherAssignments;
