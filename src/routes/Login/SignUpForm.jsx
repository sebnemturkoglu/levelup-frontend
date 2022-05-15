import {
  Button,
  Grid,
  TextField,
  Typography,
  Link,
  Checkbox,
} from "@mui/material";

const SignUpForm = (props) => {
  return (
    <Grid sx={{ width: "100%" }} py={10} px={3}>
      <Typography variant="h4" color={"secondary"} sx={{ fontWeight: "500" }}>
        Sign Up
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
        <Grid
          container
        >
          <Grid item xs={6}>
            <TextField
              sx={{ width: "98%", left:0 }}
              required={true}
              margin="dense"
              label="Name"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              sx={{ width: "98%", right:0 }}
              required={true}
              margin="dense"
              label="Surname"
            />
          </Grid>
          <TextField
            fullWidth
            required={true}
            margin="dense"
            label="Email"
            //   sx={}
          />
        </Grid>
        <TextField
          fullWidth
          required={true}
          margin="dense"
          label="Surname"
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

        <Button
          fullWidth
          variant="contained"
          sx={{ color: "#fff", margin: "1em 0em" }}
        >
          Sign up
        </Button>
        <Typography variant="bdoy2">
          Already have an account?{" "}
          <Link
            underline="hover"
            onClick={() => {
              props.setIsSignUp(false);
            }}
          >
            Login
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SignUpForm;
