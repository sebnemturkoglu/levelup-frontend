// user types
export const USER = "USER";
export const TEACHER = "TEACHER";
export const NATIVE = "NATIVE";
export const ADMIN = "ADMIN";

//MUI theme
export const themeSettings = {
  palette: {
    type: "light",
    primary: {
      main: "#05C46B",
    },
    secondary: {
      main: "#2B2E4A",
    },
    text: {
      primary: "#000000",
      secondary: "#2B2E4A",
      disabled: "#666A7B",
      hint: "#737373",
    },
    error: {
      main: "#ED4C5C",
    },
  },
};

// arrays
export const LANGUAGES = [ 'French', 'German'
];

export const USER_TYPES = [
  {
    value: USER,
    name: 'User'
  },
  {
    value: TEACHER,
    name: 'Teacher'
  },
  {
    value: NATIVE,
    name: 'Native'
  },
  {
    value: ADMIN,
    name: 'Admin'
  },
]

// action types
export const GET_ALL_HOMEWORKS = 'GET_ALL_HOMEWORKS';
export const CREATE_HOMEWORK = 'CREATE_HOMEWORK';

export const GET_ALL_CLASSES = 'GET_ALL_CLASSES';
export const GET_USER_CLASSES = 'GET_USER_CLASSES';

export const GET_ALL_EXERCISES = 'GET_ALL_EXERCISES';

export const SIGNUP = 'SIGNUP';
