import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import AssignHomeworkModal from "./AssignHomeworkModal";
import { getAllHomeworks } from "../../../actions/homeworks";

const columns = [
    { field: "assName", headerName: "Assignment Name", width: 240 },
    { field: "courseName", headerName: "Course Name", width: 240 },
    { field: "dueDate", headerName: "Due Date", width: 200 },
    {
        field: "desc",
        headerName: "Description",
        width: 300,
      },
    {
        field: "files",
        headerName: "Attached Files",
        width: 240,
        renderCell: (params) => {
          return <a>Files</a>; 
        },
    },
  ];

const TeacherAssignments = () => {

  const dispatch = useDispatch();
  const homeworks = useSelector((state) => state.homeworks);
  console.log(homeworks);

  useEffect(() => {
    dispatch(getAllHomeworks());
  }, [dispatch]);

  
  const [tab, setTab] = useState('all');
  const rows = [];


//   useEffect(() => {
    // dispatch(fetchAllSpekingExercises());
//   }, [dispatch, dataCourse]);

const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };

  const [modalOpen, setOpen] = React.useState(false);
  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);

  return (
    <div>
      <Box sx={{ width: "100%", bgcolor: "#fff", paddingTop:'24px', borderRadius:'20px'}}>
        <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'} mb={2} >
        <Typography variant="h5" color={'secondary'} sx={{marginLeft:'24px'}} >Assignments</Typography>
        <Button variant="contained" color="secondary" sx={{marginRight:'14px'}} onClick={handleOpenModal} >Assign Homework</Button>
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
      <AssignHomeworkModal open={modalOpen} handleOpen={handleOpenModal}  handleClose={handleCloseModal}/>
    </div>
  );
};

export default TeacherAssignments;
