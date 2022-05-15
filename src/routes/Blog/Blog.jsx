import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const columns = [
  {
    field: "posts",
    headerName: "Posts",
    width: 400,
    renderCell: (params) => {
      return <Link to="post/" state={params.row}>{params.row.post}</Link>;
    },
  },
  { field: "language", headerName: "Language", width: 170 },
  {
    field: "creator",
    headerName: "Creator",
    width: 400,
  },
  {
    field: "replies",
    headerName: "Replies",
    width: 130,
  },
];

const posts = [
  {
    id: 1,
    post: "How to spell quelle?",
    language: "French",
    creator: "Created by Mert Şen at 17.03.2022 16.53",
    replies: "No replies",
  },
  {
    id: 2,
    post: "How to pronounciate schmerzen?",
    language: "German",
    creator: "Created by Arda Şen at 19.03.2022 22.53",
    replies: "2 replies",
  },
];

const Blog = () => {
  //   const dispatch = useDispatch();

  //   const classes = useSelector((state) => state.classes);
  const [tab, setTab] = useState("classes");

  //   useEffect(() => {
  // dispatch(fetchAllClasses());
  //   }, [dispatch, dataCourse]);

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };

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
          mb={3}
        >
          Blog
        </Typography>
        <div style={{ height: "70vh", width: "100%" }}>
          <DataGrid
            rows={posts}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10, 20, 30]}
            disableSelectionOnClick
          />
        </div>
      </Box>
    </div>
  );
};

export default Blog;
