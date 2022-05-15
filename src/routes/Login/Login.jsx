import React, { useState } from "react";
import { Grid } from "@mui/material";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";
import background from "../../assets/background3.png";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <Grid container display={"flex"} flexDirection={"row"}>
      <Grid item xs={6} sx={{ bgcolor: "#fff", height: "100vh" }}>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{ minHeight: "100vh" }}
        >
          {isSignUp ? <SignUpForm setIsSignUp={setIsSignUp} /> : <LoginForm setIsSignUp={setIsSignUp} />}
        </Grid>
      </Grid>
      <Grid item xs={6} sx={{ bgcolor: "#fff", height: "100vh" }}>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{ minHeight: "100vh", bgcolor: "#F2F4F7" }}
        >
          <img
          src={background}
          alt="login-background"
          style={{width:'50%'}}
        />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;
