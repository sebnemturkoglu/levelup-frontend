import * as api from "../api/exercises";
import { GET_ALL_EXERCISES } from "../constants/constants";

export const getUserAllExercises = () => async (dispatch) => {
  try {
    const { data } = await api.getUserAllExercises();
    console.log(data);
    dispatch({ type: GET_ALL_EXERCISES, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getUserUpcomingExercises = () => async (dispatch) => {
    try {
      const { data } = await api.getUserUpcomingExercises();
      console.log(data);
      dispatch({ type: GET_ALL_EXERCISES, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };

  export const getUserExerciseRequests = () => async (dispatch) => {
    try {
      const { data } = await api.getUserExerciseRequests();
      console.log(data);
      dispatch({ type: GET_ALL_EXERCISES, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };

  