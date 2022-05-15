import {
    Button,
    Grid,
    TextField,
    Typography,
    Link,
    Checkbox,
  } from "@mui/material";
  
  const LoginForm = (props) => {
    return (
      <Grid sx={{ width: "100%" }} py={10} px={3}>
        <Typography variant="h4" color={"secondary"} sx={{ fontWeight: "500" }}>
          Login
        </Typography>
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
          sx={{ width: "90%" }}
          display="flex"
          flexDirection="column"
        >
          <TextField
            fullWidth
            required={true}
            margin="dense"
            label="Email"
            //   sx={}
          />
          <TextField
            fullWidth
            margin="dense"
            required={true}
            //   error={true}
            label="Password"
            type="password"
            autoComplete="current-password"
          />
          <Grid
            component="main"
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            sx={{ width: "100%" }}
          >
            <Typography>
              <Checkbox
              size="small"
              sx={{margin:0}}
                //   onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
              Remember me?
            </Typography>
  
            <Link underline="hover" sx={{margin:'auto 0'}} >Forget password?</Link>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            sx={{ color: "#fff", margin: "1em 0em" }}
          >
            Login
          </Button>
          <Typography variant="bdoy2">
            Don't have an account?{" "}
            <Link
              underline="hover"
              onClick={() => {
                props.setIsSignUp(true);
              }}
            >
              Sign up
            </Link>
          </Typography>
        </Grid>
      </Grid>
    );
  };
  
  export default LoginForm;
  