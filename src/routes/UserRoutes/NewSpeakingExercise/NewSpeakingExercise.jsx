import React from "react";
import {
  Grid,
  Box,
  Typography,
  Button,
  TextField,
  Avatar,
  Rating,
  FormControl,
} from "@mui/material";
import NativeList from "./NativeList";
import avatar1 from "../../../assets/avatar1.png";
import avatar2 from "../../../assets/avatar2.png";
import avatar3 from "../../../assets/avatar3.png";
import avatar4 from "../../../assets/avatar4.png";
import avatar5 from "../../../assets/avatar5.png";

const natives = [
  {
    id: 1,
    name: "Celine Dion",
    description:
      "Sit in a box for hours miaow then turn around and show you my bum love and coo around boyfriend who purrs and makes the perfect moonlight eyes so i can purr and swat the glittery gleaming yarn to him.",
    rating: 4.6,
    avatar: avatar1,
  },
  {
    id: 2,
    name: "Pierre Gasly",
    description:
      "Sit in a box for hours miaow then turn around and show you my bum love and coo around boyfriend who purrs and makes the perfect moonlight eyes so i can purr and swat the glittery gleaming yarn to him.",
    rating: 5.0,
    avatar: avatar2,
  },
  {
    id: 3,
    name: "Estaban Ocon",
    description:
      "Sit in a box for hours miaow then turn around and show you my bum love and coo around boyfriend who purrs and makes the perfect moonlight eyes so i can purr and swat the glittery gleaming yarn to him.",
    rating: 4.3,
    avatar: avatar3,
  },
  {
    id: 4,
    name: "Charles Leclerc",
    description:
      "Sit in a box for hours miaow then turn around and show you my bum love and coo around boyfriend who purrs and makes the perfect moonlight eyes so i can purr and swat the glittery gleaming yarn to him.",
    rating: 4.3,
    avatar: avatar4,
  },
  {
    id: 5,
    name: "Timothee Chalamet",
    description:
      "Sit in a box for hours miaow then turn around and show you my bum love and coo around boyfriend who purrs and makes the perfect moonlight eyes so i can purr and swat the glittery gleaming yarn to him.",
    rating: 4.3,
    avatar: avatar5,
  },
];

const NewSpeakingExercise = () => {
  const [selectedNative, setSelectedNative] = React.useState(natives[0]);
  console.log(selectedNative);

  return (
    <Box
      sx={{
        display: "flex",
        height: "85vh",
      }}
    >
      <Box sx={{ display: "flex", borderRadius: "42px", width: "100%" }}>
        <NativeList select={setSelectedNative} natives={natives} />
        <Box
          component="main"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          sx={{
            flexGrow: 1,
            bgcolor: "#fff",
            borderRadius: " 0px 42px 42px 0px",
            p: 3,
            pt: 5,
            height: "100%",
          }}
        >
          <Box>
            <Avatar
              alt={selectedNative.name}
              src={selectedNative.avatar}
              sx={{
                width: 160,
                height: 160,
                bgcolor: "#E5E5E5",
                marginBottom: "24px",
              }}
            />
            <Typography variant="h5">{selectedNative.name}</Typography>
            <Rating
              name="read-only"
              value={selectedNative.rating}
              precision={0.1}
              readOnly
            />
            <Typography variant="subtitle1" mb={3}>
              Average Rating: {selectedNative.rating}
            </Typography>
            <Typography variant="body1">Description:</Typography>
            <Typography variant="caption">
              {selectedNative.description}
            </Typography>
          </Box>

          <Box >
            <Grid container display={"flex"} flexDirection={"row"} sx={{width:'100%'}}>
              <Grid item xs={12} md={6} sx={{width:'100%'}}>
                <FormControl sx={{ m: 1, width:'95%' }}>
                  <TextField
                    id="datetime-local"
                    label="Pick date and time"
                    type="datetime-local"
                    defaultValue=""
                    sx={{}}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6} sx={{width:'100%'}}>
                <FormControl sx={{ m: 1, width:'95%'  }}>
                  <TextField
                    id="outlined-textarea"
                    label="Notes"
                    multiline
                  />
                </FormControl>
              </Grid>
              <Button variant="contained" sx={{ m:1, color: "#fff" }}>
              Request Exercise
            </Button>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default NewSpeakingExercise;
