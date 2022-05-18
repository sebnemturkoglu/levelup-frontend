import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { TextField, Stack } from "@mui/material";
import styled from "@emotion/styled";
import { createHomework } from "../../../actions/homeworks";
import { LEVELS } from "../../../constants/constants";
import {
  Typography,
  Grid,
  Link,
  MenuItem,
} from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useDispatch } from "react-redux";

const Input = styled("input")({
  display: "none",
});

export default function AddClassModal(props) {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [level, setLevel] = React.useState();
  const [startDate, setStartDate] = React.useState();
  const [endDate, setEndDate] = React.useState();
  const [age, setAge] = React.useState("");

  const [homeworkData, setHomeworkData ] = React.useState({
    name: null,
    description: null,
    due_datetime: null,
    assign_datetime: new Date(),
    grade: null,
    class: null,
  });

  const handleStartDate = (newValue) => {
    setStartDate(newValue);
    // setUserData({ ...userData, date_birth: newValue.toISOString().split('T')[0] });
  };

  const handleEndDate = (newValue) => {
    setEndDate(newValue);
    // setUserData({ ...userData, date_birth: newValue.toISOString().split('T')[0] });
  };


  const handleFormOnChange = (event) => {
    event.preventDefault();
    const field = event.target.name;
    setHomeworkData({ ...homeworkData, [field]: event.target.value });
  }

  const handleChange = (event) => {
    setAge(Number(event.target.value) || "");
    handleFormOnChange(event);
  };

  const handleAssignmentSubmit = (event) => {
    const { grade, ...rest } = homeworkData;
    const containsNull = Object.values(rest).some(x => x === null || x === '');
    if(containsNull){
      alert('no field should be blank!');
    }
    else {
      dispatch(createHomework(homeworkData));  
    }
  }

  const handleLevel = (event) => {
    setLevel(event.target.value);
    // handleFormOnChange(event);
  };

  return (
    <div>
      <Dialog
        disableEscapeKeyDown
        open={props.open}
        onClose={props.handleClose}
        BackdropProps={{
          style: {
            backgroundColor: "rgba(43, 46, 74, 0.82)",
            boxShadow: "none",
          },
        }}
      >
        <DialogTitle>New Class</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: "flex", flexWrap: "wrap" }}>
            <Box
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"space-evenly"}
            >
              <FormControl sx={{ m: 1, width: "100%" }}>
                <InputLabel htmlFor="demo-dialog-native">
                  Choose Course
                </InputLabel>
                <Select
                  native
                  required={true}
                  label='class'
                  value={age}
                  name='class'
                  onChange={handleChange}
                  input={
                    <OutlinedInput label="Courses" id="demo-dialog-native" />
                  }
                >
                  <option aria-label="None" value="" />
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, width: "100%" }}>
                <InputLabel id="demo-dialog-select-label"></InputLabel>
                <TextField
                  fullWidth
                  required={true}
                  id="datetime-local"
                  label="Next appointment"
                  type="datetime-local"
                  name='due_datetime'
                  defaultValue=""
                  onChange={handleFormOnChange}
                  sx={{ width: "310px" }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </FormControl>
            </Box>
            <FormControl sx={{ m: 1, width: "100%" }}>
              <TextField fullWidth label="Course Name" name='name' onChange={handleFormOnChange} required={true}/>
            </FormControl>
            <FormControl sx={{ m: 1, width: "100%" }}>
              <TextField id="outlined-textarea" label="Description" name='description' multiline onChange={handleFormOnChange} required={true}/>
            </FormControl>
            <FormControl sx={{ m: 1, width: "100%" }}>
              <TextField id="outlined-textarea" label="Capacity" name='description' type={'number'}  onChange={handleFormOnChange} required={true}/>
            </FormControl>
            <FormControl sx={{ m: 1, width: "100%" }}>
              <TextField id="outlined-textarea" label="Duration" name='description' type={'number'}  onChange={handleFormOnChange} required={true}/>
            </FormControl>
            <Grid container>
          <Grid item xs={6}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
            
              label="Start date"
              inputFormat="MM/dd/yyyy"
              value={startDate}
              onChange={handleStartDate}
              renderInput={(params) => <TextField {...params} sx={{ width: "98%", left: 0 }} margin="dense" required={true}/> }
            />
          </LocalizationProvider>
          </Grid>
          <Grid item xs={6}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
            
              label="End date"
              inputFormat="MM/dd/yyyy"
              value={endDate}
              onChange={setEndDate}
              renderInput={(params) => <TextField {...params} sx={{ width: "98%", left: 0 }} margin="dense" required={true}/> }
            />
          </LocalizationProvider>
          </Grid>
        </Grid>
        <FormControl sx={{ m: 1, minWidth: 200, width: "100%" }} size="medium">
          <InputLabel>Choose Level</InputLabel>
          <Select value={level} name="userType" onChange={handleLevel}>
            {LEVELS.map((item, index) => (
              <MenuItem key={index} value={item.value}>
                <Typography>{item.name}</Typography>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
            <FormControl sx={{ m: 1, width: "100%" }}>
              <Stack direction="row" alignItems="center" spacing={2}>
                <label htmlFor="contained-button-file">
                  <Input
                    accept="image/*"
                    id="contained-button-file"
                    multiple
                    type="file"
                  />
                  <Button variant="outlined" component="span" >
                  Attach Additional Files 
                  </Button>
                </label>
              </Stack>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button  onClick={props.handleClose}>Cancel</Button>
          <Button onClick={handleAssignmentSubmit}>Assign</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
