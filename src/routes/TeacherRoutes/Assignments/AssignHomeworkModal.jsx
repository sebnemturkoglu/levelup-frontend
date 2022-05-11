import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { TextField, Stack } from "@mui/material";
import styled from "@emotion/styled";

const Input = styled("input")({
  display: "none",
});

export default function DialogSelect(props) {
  const [open, setOpen] = React.useState(false);
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(Number(event.target.value) || "");
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== "backdropClick") {
      setOpen(false);
    }
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
        <DialogTitle>New Assignment</DialogTitle>
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
                  value={age}
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
                  id="datetime-local"
                  label="Next appointment"
                  type="datetime-local"
                  defaultValue=""
                  sx={{ width: "310px" }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </FormControl>
            </Box>
            <FormControl sx={{ m: 1, width: "100%" }}>
              <TextField fullWidth label="Assignment Name" />
            </FormControl>
            <FormControl sx={{ m: 1, width: "100%" }}>
              <TextField id="outlined-textarea" label="Description" multiline />
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
          <Button onClick={props.handleClose}>Assign</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
