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
  { field: "date", headerName: "Exercise Date & Time", width: 200 },
  {
    field: "notes",
    headerName: "Notes",
    width: 400,
  },
  {
    field: "accept",
    headerName: "Accept",
    width: 140,
    renderCell: (params) => {
      return <a>Accept</a>;
    },
  },
  {
    field: "reject",
    headerName: "Reject",
    width: 140,
    renderCell: (params) => {
      return <a>Reject</a>;
    },
  },
];

const NativeRequests = () => {
  //   const dispatch = useDispatch();

  //   const speakingExercises = useSelector((state) => state.speakingExercises);
  const rows = [];


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
          Requests
        </Typography>
        
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

export default NativeRequests;
