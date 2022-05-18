import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";

const columnsClasses = [
  { field: "name", headerName: "Name", width: 200 },
  { field: "language", headerName: "Language", width: 170 },
  {
    field: "level",
    headerName: "Level",
    width: 150,
  },
  {
    field: "courseStart",
    headerName: "Course Start",
    width: 130,
  },
  {
    field: "courseEnd",
    headerName: "Course End",
    width: 130,
  },
  {
    field: "capacity",
    headerName: "Capacity",
    width: 120,
  },
  {
    field: "enrollment",
    headerName: "Enrollment",
    width: 120,
  },
];

const rowsClasses = [
  {
    id:1,
    name: 'DELF B1',
    language:'French',
    level:'Intermediate',
    courseStart:'12.05.2022',
    courseEnd:'12.07.2022',
    capacity:20,
    enrollment:1
  },
  {
    id:2,
    name: 'DELF B2',
    language:'French',
    level:'Intermediate',
    courseStart:'13.07.2022',
    courseEnd:'13.09.2022',
    capacity:20,
    enrollment:1
  },
]

const columnsRequests = [
  { field: "courseName", headerName: "Requested Course", width: 200 },
  { field: "studentName", headerName: "Student Name", width: 170 },
  {
    field: "reqDate",
    headerName: "Request Date & Time",
    width: 150,
  },
  {
    field: "capacity",
    headerName: "Capacity",
    width: 120,
  },
  {
    field: "enrollment",
    headerName: "Enrollment",
    width: 120,
  },
  {
    field: "accept",
    headerName: "Accept Request",
    width: 140,
    renderCell: (params) => {
      return <a>Accept</a>; // will change after data
    },
  },
];

const rowsRequests = [
  {
    id: 1,
    courseName: 'DELF B2',
    studentName: 'Arda İbiş',
    reqDate:'13.07.2022',
    capacity:20,
    enrollment: 1,
  }
]

const TeacherClasses = () => {
  //   const dispatch = useDispatch();

  //   const classes = useSelector((state) => state.classes);
  const [tab, setTab] = useState("classes");
  const [rows, setRows] = useState(rowsClasses);

  const handleTabChange = (event, newValue) => {
    console.log(tab);
    setTab(newValue);
  };

  return (
    <div>
      <Box sx={{ width: "100%", bgcolor: "#fff", paddingTop: "24px" }}>
        <Typography
          variant="h5"
          color={"secondary"}
          sx={{ marginLeft: "24px" }}
        >
          Classes
        </Typography>
        <Tabs
          value={tab}
          sx={{ marginLeft: "24px" }}
          indicatorColor="primary"
          onChange={handleTabChange}
        >
          <Tab value="classes" label="Classes" />
          <Tab value="reqs" label="Requests" />
        </Tabs>
        <div style={{ height: "70vh", width: "100%" }}>
          {tab == "classes" ? (
            <DataGrid
              rows={rowsClasses}
              columns={columnsClasses}
              pageSize={10}
              rowsPerPageOptions={[10]}
              disableSelectionOnClick
            />
          ) : (
            <DataGrid
              rows={rowsRequests}
              columns={columnsRequests}
              pageSize={10}
              rowsPerPageOptions={[10]}
              disableSelectionOnClick
            />
          )}
        </div>
      </Box>
    </div>
  );
};

export default TeacherClasses;
