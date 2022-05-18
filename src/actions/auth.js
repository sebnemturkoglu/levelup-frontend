import * as api from "../api/auth";
import { USER, TEACHER, NATIVE, ADMIN } from "../constants/constants";

export const signUp = (userData, navigate) => async (dispatch) => {
  const {
    email,
    username,
    password,
    phone,
    name,
    surname,
    date_birth,
    description,
    years_of_experience,
    languages,
  } = userData;
  let user;
  let data;

  try {
    switch (userData.userType) {
        case USER:
          user = {
            email,
            username,
            password,
            phone,
            name: `${name} ${surname}`,
            date_birth,
          };
          console.log(user);
          data  = await api.signUpStudent(user);
          if (data.data.token) {
            navigate('/user');
          }
          break;
    
        case TEACHER:
          user = {
            email,
            username,
            password,
            phone,
            name: `${name} ${surname}`,
            date_birth,
            description,
            years_of_experience,
          };
          user.knows = [];
          languages.forEach((element) => {
            user.knows.push({ lang_name: element });
          });
          console.log(user);
          data  =await api.signUpTeacher(user);
          if (data.data.token) {
            navigate('/teacher');
          }
          break;
    
        case NATIVE:
          user = {
            email,
            username,
            password,
            phone,
            name: `${name} ${surname}`,
            date_birth,
            description,
          };
          user.speaks = [];
          languages.forEach((element) => {
            user.speaks.push({ lang_name: element });
          });
          console.log(user);
          data =await api.signUpNative(user);
          if (data.data.token) {
            navigate('/native');
          }
          break;
    
        case ADMIN:
          user = {
            email,
            username,
            password,
            phone,
            name: `${name} ${surname}`,
            date_birth,
          };
          console.log(user);
          data = await api.signUpAdmin(user);
          if (data.data.token) {
            navigate('/admin');
          }
          break;
    
        default:
          break;
      }

  } catch (error) {
      console.log(error);
  }
};
