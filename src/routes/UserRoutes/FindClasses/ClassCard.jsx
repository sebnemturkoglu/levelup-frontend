import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CardImage from "../../../assets/CourseCardImage.png";

export default function ClassCard() {
  const theme = useTheme();

  return (
    <Card sx={{ display: "flex", height: "90px" }}>
      <CardMedia
        component="img"
        sx={{ width: 70, margin:'4px' }}
        image={CardImage}
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="body2">
            Writing for DELF1
          </Typography>
          <Typography
            variant="caption"
            color="text.secondary"
            component="div"
          >
            Instructor: Sırma Kuzukulak
          </Typography>
          <Typography
            variant="caption"
            color="text.secondary"
            component="div"
          >
            Duration: 8 weeks
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
