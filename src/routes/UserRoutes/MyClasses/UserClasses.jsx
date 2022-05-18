import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { getUserClasses } from "../../../actions/classes";

const columnsClasses = [
    { field: "name", headerName: "Name", width: 200 },
    { field: "instructor", headerName: "Instructor", width: 200 },
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
        field: "gradeAverage",
        headerName: "Grade Average",
        width: 120,
    },
  ];

  const columnsRequests = [
    { field: "name", headerName: "Name", width: 200 },
    { field: "instructor", headerName: "Instructor", width: 200 },
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
        field: "status",
        headerName: "Status",
        width: 120,
    },
  ];

  const rowsClasses = [
    {
      id:1,
      name: 'DELF B1',
      instructor: 'Şebnem Türkoğlu',
      language:'French',
      level:'Intermediate',
      courseStart:'12.05.2022',
      courseEnd:'12.07.2022',
      gradeAverage:84.67,
    },
    {
      id:2,
      name: 'German B1',
      instructor: 'Arda İbiş',
      language:'German',
      level:'Intermediate',
      courseStart:'12.05.2022',
      courseEnd:'12.07.2022',
      gradeAverage:42.67,
    }
  ]

  const rowsRequests = [
    {
      id: 1,
      name: 'DELF B2',
      instructor: 'Şebnem Türkoğlu',
      language:'French',
      level:'Intermediate',
      courseStart:'13.07.2022',
      courseEnd:'13.09.2022',
      status:'Pending',
    }
  ]

const UserClasses = () => {

  const dispatch = useDispatch();

//   const classes = useSelector((state) => state.classes);
  const [tab, setTab] = useState('classes');
  const [columns, setColumns] = useState(columnsClasses);
  const [classRows, setClassRows] = useState([]);
  const [rows, setRows] = useState(rowsClasses);


  useEffect(() => {
    dispatch(getUserClasses());

    if (tab == 'classes') {
      setColumns(columnsClasses);
      setRows(rowsClasses);
    } else {
      setColumns(columnsRequests);
      setRows(rowsRequests);
    }
  }, [tab, dispatch, classRows]);


  // classes.forEach(class => {
  //   if (!classRows.some((dataC) => dataC.id === class.id)) {
  //     setDataCourse(prevState => [...prevState, {
  //       id: class.id,
  //       name: 'DELF B1',
  //       instructor: 'Şebnem Türkoğlu',
  //       language:'French',
  //       level:'Intermediate',
  //       courseStart:'12.05.2022',
  //       courseEnd:'12.07.2022',
  //       gradeAverage:84.67,
  //     }])
  //   }
  // });

const handleTabChange = (event, newValue) => {
    setTab(newValue);
  
  };


  return (
    <div>
      <Box sx={{ width: "100%", bgcolor: "#fff", paddingTop:'24px'}}>
        <Typography variant="h5" color={'secondary'} sx={{marginLeft:'24px'}} >My Classes</Typography>
        <Tabs
          value={tab}
          sx={{marginLeft:'24px'}}
          indicatorColor="primary"
          onChange={handleTabChange}
        >
          <Tab value="classes" label="Classes" />
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

export default UserClasses;
