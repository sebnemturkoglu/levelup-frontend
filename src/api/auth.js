import axios from "axios";
const API = axios.create({ baseURL: "http://127.0.0.1:8000/api" });

export const signUpStudent = (user) => API.post("signup/student", user);
export const signUpAdmin = (user) => API.post("/signup/system_admin", user);
export const signUpNative = (user) => API.post("/signup/language_native", user);
export const signUpTeacher = (user) => API.post("/signup/teacher", user);