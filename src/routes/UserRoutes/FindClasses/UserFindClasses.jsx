import React from "react";
import { Grid, Box, Typography, Button, TextField } from "@mui/material";
import ClassList from "./ClassList";
import { useDispatch, useSelector } from "react-redux";

const courseInfo = {
  name: "Writing for DELF B1",
  description:
    "Flop over rub against owner because nose is wet yet a nice warm laptop for me to sit on. Avoid the new toy and just play with the box it came in caticus cuteicus plop down in the middle where everybody walks but run at 3am but hiss at vacuum cleaner for i rule on my back you rub my tummy i bite you hard try to jump onto window and fall while scratching at wall.",
  duration: "6 weeks",
  requiredBooks: "Français Pour Chats - Un Chat",
  weeklyPlan: [
    "Week 1: Chapter 1 & 2",
    "Week 2: Chapter 3",
    "Week 3: Chapter 4",
    "Week 4: Chapter 6",
    "Week 5: Chapter 7",
    "Week 6: Chapter 8",
  ],
  startDate: "03.04.2022",
  endDate: "15.05.2022",

  };

const UserFindClasses = () => {
  return (
    <Box
      sx={{
        display: "flex",
        height: "85vh",
      }}
    >
      <Box sx={{ display: "flex", borderRadius: "42px", width: "100%" }}>
        <ClassList  />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            bgcolor: "#fff",
            borderRadius: " 0px 42px 42px 0px",
            p: 3,
            pt: 5,
            height: "100%",
          }}
        >
          <Typography variant="h5" mb={3}>
            {courseInfo.name}
          </Typography>
          <Typography variant="body2" mb={3} sx={{ fontSize: "0.8rem" }}>
            Description:<br/> {courseInfo.description}
          </Typography>
          <Typography variant="body2" mb={3} sx={{ fontSize: "0.8rem" }}>
            Duration:<br/> {courseInfo.duration}
          </Typography>
          <Typography variant="body2" mb={3} sx={{ fontSize: "0.8rem" }}>
            Required Books:<br/> {courseInfo.requiredBooks}
          </Typography>
          <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
            Weekly Plan:
          </Typography>
          {courseInfo.weeklyPlan.map((item, index) => (
                <Typography  variant="body2" sx={{ fontSize: "0.8rem" }}>{item}</Typography>
              ))}
          <Typography variant="body2" my={3} sx={{ fontSize: "0.8rem" }}>
            Course Start Date::<br/> {courseInfo.startDate}
          </Typography>
          <Typography variant="body2" my={3} sx={{ fontSize: "0.8rem" }}>
            Course End Date:<br/> {courseInfo.endDate}
          </Typography>
          <Button variant="contained" sx={{color:'#fff'}} >Hello</Button></Box>
      </Box>
    </Box>
  );
};

export default UserFindClasses;
