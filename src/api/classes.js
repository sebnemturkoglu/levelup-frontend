import axios from "axios";
const API = axios.create({ baseURL: "http://127.0.0.1:8000/api" });

export const getAllClasses = () => API.get("/classes");
export const getTeacherClasses = () => API.get("/classes_teacher");

// export const getUserClasses = () => API.get();