import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const columns = [
  { field: "studentName", headerName: "Student Name", width: 240 },
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
    field: "gradeStudent",
    headerName: "Grade Student",
    width: 240,
    renderCell: (params) => {
      return <a>Grade</a>;
    },
  },
];

const rows = [
  {
    id:1,
    studentName: 'Mert Şen',
    grade:'-',
    date:'12.05.2022',
  },
  {
    id:2,
    studentName: 'Yağmur Türkoğlu',
    grade:'-',
    date:'12.05.2022',
  },
]

const NativeExercises = () => {
  //   const dispatch = useDispatch();

  //   const speakingExercises = useSelector((state) => state.speakingExercises);
  const [optGraded, setGradedOption] = React.useState("Graded");
  const [optTime, setTimeOption] = React.useState("Upcoming");

  const handleChangeGradedOption = (event) => {
    setGradedOption(event.target.value);
  };

  const handleChangeTimeOption = (event) => {
    setTimeOption(event.target.value);
  };

  //   useEffect(() => {
  // dispatch(fetchAllSpekingExercises());
  //   }, [dispatch, dataCourse]);

  return (
    <div>
      <Box
        sx={{
          width: "100%",
          bgcolor: "#fff",
          paddingTop: "24px",
          borderRadius: "20px",
        }}
      >
        <Typography
          variant="h5"
          color={"secondary"}
          sx={{ marginLeft: "24px" }}
        >
          Exercises
        </Typography>
        <Box display={"flex"} flexDirection={"row"}>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small">Filter</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={optGraded}
              label="optGraded"
              onChange={handleChangeGradedOption}
            >
              <MenuItem value={"graded"}>Graded</MenuItem>
              <MenuItem value={"ungraded"}>Ungraded</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small">Filter</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={optTime}
              label="optTime"
              onChange={handleChangeTimeOption}
            >
              <MenuItem value={"upcoming"}>Upcoming</MenuItem>
              <MenuItem value={"past"}>Past</MenuItem>
            </Select>
          </FormControl>
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

export default NativeExercises;
