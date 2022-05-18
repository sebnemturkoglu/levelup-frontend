import { GET_ALL_EXERCISES } from "../constants/constants";

export default (exercises = [], action) => {
  switch (action.type) {
    case GET_ALL_EXERCISES:
      return action.payload;

    default:
      return exercises;
  }
};
