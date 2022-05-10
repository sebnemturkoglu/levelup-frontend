import React from 'react';
import { Routes, Route } from "react-router-dom";

import RequireAuth from "./components/RequireAuth/RequireAuth";
import Layout from "./routes/Layout/Layout";
import Login from "./routes/Login/Login";

import { USER, TEACHER, NATIVE, ADMIN } from './constants/constants';

// pages
import UserDashboard from './routes/UserRoutes/Dashboard/UserDashboard';
import UserClasses from './routes/UserRoutes/MyClasses/UserClasses';
import UserFindClasses from './routes/UserRoutes/FindClasses/UserFindClasses';
import UserSpeakingExercises from './routes/UserRoutes/UserSpeakingExercises/UserSpeakingExercises';
import UserGrades from './routes/UserRoutes/Grades/UserGrades';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      {/* <Route path='*' element={<PageNotFound />} /> */}
      
      <Route element={<RequireAuth allowedRoles={USER}/>} >
        <Route path="/user" element={<Layout userType={USER} />}>
          <Route path="" element={<UserDashboard />} />
          <Route path="my-classes" element={<UserClasses />} />
          <Route path="find-classes" element={<UserFindClasses />} />
          <Route path="speaking-lessons" element={<UserSpeakingExercises />} />
          <Route path="grades" element={<UserGrades />} />
          {/* <Route path="blog" element={<InstructorProfile />} /> */}
        </Route>
      </Route>

      <Route element={<RequireAuth allowedRoles={TEACHER}/>} >
        <Route path="/teacher" element={<Layout userType={TEACHER} />}>
          {/* <Route path="" element={<UserDashboard />} />
          <Route path="classes" element={<UserRes />} />
          <Route path="assignments" element={<UserCourses />} />
          <Route path="blog" element={<StudentProfile />} /> */}
        </Route>
      </Route>

      <Route element={<RequireAuth allowedRoles={NATIVE}/>} >
        <Route path="/native" element={<Layout userType={NATIVE} />}>
          {/* <Route path="" element={<UserDashboard />} />
          <Route path="exercises" element={<UserRes />} />
          <Route path="requests" element={<UserCourses />} />
          <Route path="blog" element={<StudentProfile />} /> */}
        </Route>
      </Route>

      <Route element={<RequireAuth allowedRoles={ADMIN}/>} >
        <Route path="/admin" element={<Layout userType={ADMIN} />}>
          {/* <Route path="" element={<AdminDashboard />}></Route> */}
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
