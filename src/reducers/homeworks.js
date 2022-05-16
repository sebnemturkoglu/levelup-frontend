import { GET_ALL_HOMEWORKS } from "../constants/constants";

export default (courses = [], action) => {
    switch (action.type) {
      case GET_ALL_HOMEWORKS:
        return action.payload;
    //   case "LOGOUT":
    //     return [];
      default:
        return courses;
    }
  };