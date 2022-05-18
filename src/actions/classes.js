import * as api from "../api/classes";
import { GET_ALL_CLASSES, GET_USER_CLASSES, GET_TEACHER_CLASSES } from "../constants/constants";

export const getAllClasses = () => async (dispatch) => {
  try {
    const { data } = await api.getAllClasses();
    dispatch({ type: "GET_ALL_CLASSES", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getUserClasses = () => async (dispatch) => {
  try {
    // const { data } = await api.getUserClasses();
    // dispatch({type: GET_USER_CLASSES, payload: data});
  } catch (error) {
    console.log(error.message);
  }
};

export const getTeacherClasses = () => async (dispatch) => {
  try {
    const { data } = await api.getTeacherClasses();
    dispatch({ type: GET_ALL_CLASSES, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
