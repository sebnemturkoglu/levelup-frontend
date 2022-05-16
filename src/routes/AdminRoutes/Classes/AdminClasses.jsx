
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import AddClassModal from "./AddClassModal";
import { getAllHomeworks } from "../../../actions/homeworks";

const columns = [
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

const AdminClasses = () => {

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
        <Typography variant="h5" color={'secondary'} sx={{marginLeft:'24px'}} >All Classes</Typography>
        <Button variant="contained" color="secondary" sx={{marginRight:'14px'}} onClick={handleOpenModal} >Add Class</Button>
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
      <AddClassModal open={modalOpen} handleOpen={handleOpenModal}  handleClose={handleCloseModal}/>
    </div>
  );
};

export default AdminClasses;
