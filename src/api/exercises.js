import axios from "axios";
const API = axios.create({ baseURL: "http://127.0.0.1:8000/api" });

export const getUserAllExercises = () => API.get("/exercises_student");
export const getUserUpcomingExercises = () => API.get("/upcoming_exercises_student");
export const getUserExerciseRequests = () => API.get("/requested_exercises_student");

