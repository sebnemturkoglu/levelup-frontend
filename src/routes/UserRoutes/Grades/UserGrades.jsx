import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

const columns = [
    { field: "name", headerName: "Name", width: 240 },
    { field: "class", headerName: "Class", width: 240 },
    { field: "date", headerName: "Date", width: 200 },
    {
      field: "grade",
      headerName: "Grade",
      width: 150,
    },
    {
        field: "view",
        headerName: "View Assignment",
        width: 1400,
        renderCell: (params) => {
          return <Button>View</Button>; // will change after data
        },
      },
  ];

  const rows = [
    {
      id:1,
      name: 'Assignment 1',
      class: 'DELF B1',
      date:'12.05.2022',
      grade:84.67,
    },
    {
      id:2,
      name: 'Assignment 1',
      class: 'German B1',
      date:'12.05.2022',
      grade:42.67,
    }
  ]

const UserGrades = () => {

//   const dispatch = useDispatch();

//   const grades = useSelector((state) => state.grades);
  const [tab, setTab] = useState('exams');


//   useEffect(() => {
    // dispatch(fetchGrades());
//   }, [dispatch, dataCourse]);

const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };


  return (
    <div>
      <Box sx={{ width: "100%", bgcolor: "#fff", paddingTop:'24px'}}>
        <Typography variant="h5" color={'secondary'} sx={{marginLeft:'24px'}} >Grades</Typography>
        <Tabs
          value={tab}
          sx={{marginLeft:'24px'}}
          indicatorColor="primary"
          onChange={handleTabChange}
        >
          <Tab value="exams" label="Exams" />
          <Tab value="homeworks" label="Homeworks" />
          <Tab value="speaking" label="Speaking Exercises" />
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

export default UserGrades;
