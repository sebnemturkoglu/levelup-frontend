import { GET_ALL_HOMEWORKS } from "../constants/constants";

export default (homeworks = [], action) => {
    switch (action.type) {
      case GET_ALL_HOMEWORKS:
        return action.payload;
    //   case "LOGOUT":
    //     return [];
      default:
        return homeworks;
    }
  };