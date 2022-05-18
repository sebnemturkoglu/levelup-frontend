import React, { useEffect } from "react";
import LanguageSelect from "./LanguageSelect";
import { USER, TEACHER, NATIVE, USER_TYPES } from "../../constants/constants";
import { signUp } from "../../actions/auth";
import {
  Button,
  Grid,
  TextField,
  Box,
  Typography,
  Link,
  MenuItem,
  InputLabel,
  Select,
  FormControl,
} from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const SignUpForm = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userType, setUserType] = React.useState(USER);
  const [optLanguage, setLanguageOption] = React.useState([]);
  const [birthdate, setBirthdate] = React.useState();
  const [userData, setUserData] = React.useState({
    userType: USER,
    username: null,
    name: null,
    surname: null,
    email: null,
    phone: null,
    date_birth: null,
    password: null,
    passwordRepeat: null,
    languages: null,
    description: null,
    years_of_experience: null,
  });

  useEffect(() => {
    setUserData({ ...userData, languages: optLanguage });
  }, [optLanguage]);

  const handleUserType = (event) => {
    setUserType(event.target.value);
    handleFormOnChange(event);
  };

  const handleFormOnChange = (event) => {
    event.preventDefault();
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleBirthdateChange = (newValue) => {
    setBirthdate(newValue);
    setUserData({ ...userData, date_birth: newValue.toISOString().split('T')[0] });
  };

  const handleSignUp = (event) => {
    let containsNull;
    if (userType === TEACHER || userType === NATIVE) {
      containsNull =
        Object.values(userData).some((x) => x === null || x === "") ||
        userData.languages.length === 0;
    } else {
      const { languages, ...rest } = userData;
      containsNull = Object.values(rest).some((x) => x === null || x === "");
    }

    if (containsNull) {
      alert("no field should be blank!");
      return;
    } else if (userData.password !== userData.passwordRepeat) {
      alert("passwords do not match");
      return;
    } else {
      const { passwordRepeat, ...rest } = userData;
      console.log(rest);
      dispatch(signUp(userData, navigate));
    }
  };


  return (
    <Grid sx={{ width: "100%" }} py={2} px={3}>
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
        <FormControl sx={{ m: 1, minWidth: 200, width: "100%" }} size="medium">
          <InputLabel>Choose User Type</InputLabel>
          <Select value={userType} name="userType" onChange={handleUserType}>
            {USER_TYPES.map((item, index) => (
              <MenuItem key={index} value={item.value}>
                <Typography>{item.name}</Typography>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {userType === TEACHER || userType === NATIVE ? (
          <LanguageSelect
            optLanguage={optLanguage}
            setLanguageOption={setLanguageOption}
          />
        ) : null}
        <TextField
          fullWidth
          required={true}
          margin="dense"
          label="Username"
          name="username"
          onChange={handleFormOnChange}
        />
        <Grid container>
          <Grid item xs={6}>
            <TextField
              sx={{ width: "98%", left: 0 }}
              required={true}
              margin="dense"
              label="Name"
              name="name"
              onChange={handleFormOnChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              sx={{ width: "98%", right: 0 }}
              required={true}
              margin="dense"
              label="Surname"
              name="surname"
              onChange={handleFormOnChange}
            />
          </Grid>
        </Grid>
        <TextField
            fullWidth
            required={true}
            margin="dense"
            label="Email"
            name="email"
            type="email"
            onChange={handleFormOnChange}
          />
          <TextField
            fullWidth
            required={true}
            margin="dense"
            label="Phone number"
            name="phone"
            type="number"
            onChange={handleFormOnChange}
          />

          <Grid container>
          <Grid item xs={6}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
            
              label="Date of birth"
              inputFormat="MM/dd/yyyy"
              value={birthdate}
              onChange={handleBirthdateChange}
              renderInput={(params) => <TextField {...params} sx={{ width: "98%", left: 0 }} margin="dense" required={true}/> }
            />
          </LocalizationProvider>
          </Grid>
          <Grid item xs={6}>
            <TextField
            sx={{ width: "98%", right: 0 }}
            required={true}
            margin="dense"
            label="Yers of exprience"
            name="years_of_experience"
            type="number"
            onChange={handleFormOnChange}
          />
          </Grid>
        </Grid>
          

          <TextField
            fullWidth
            required={true}
            margin="dense"
            label="Description"
            name="description"
            multiline
            onChange={handleFormOnChange}
          />
        <TextField
          fullWidth
          margin="dense"
          required={true}
          //   error={true}
          label="Password"
          type="password"
          autoComplete="current-password"
          name="password"
          onChange={handleFormOnChange}
        />
        <TextField
          fullWidth
          margin="dense"
          required={true}
          //   error={true}
          label="Repeat Password"
          type="password"
          autoComplete="current-password"
          name="passwordRepeat"
          onChange={handleFormOnChange}
        />

        <Button
          fullWidth
          variant="contained"
          sx={{ color: "#fff", margin: "1em 0em" }}
          onClick={handleSignUp}
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
