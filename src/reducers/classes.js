import { GET_ALL_CLASSES, GET_USER_CLASSES } from "../constants/constants";

export default (classes = [], action) => {
  switch (action.type) {
    case GET_ALL_CLASSES:
      return action.payload;

    case GET_USER_CLASSES:
      return action.payload;
    //   case "LOGOUT":
    //     return [];
    default:
      return classes;
  }
};
