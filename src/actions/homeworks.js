import * as api from "../api/homeworks";
import { GET_ALL_HOMEWORKS } from "../constants/constants";

export const getAllHomeworks = () => async (dispatch) => {
  try {
    const { data } = await api.getAllHomeworks();
    console.log(data);
    dispatch({ type: GET_ALL_HOMEWORKS, payload: data });

  } catch (error) {
    console.log(error.message);
  }
};

export const createHomework = (homework) => async (dispatch) => {
    try {
        await api.createHomework(homework);
    } catch (error) {
        console.log(error.message);
    }
}