import React from 'react';
import { Routes, Route } from "react-router-dom";

import RequireAuth from "./components/RequireAuth/RequireAuth";
import Layout from "./routes/Layout/Layout";
import Login from "./routes/Login/Login";

import { USER, TEACHER, NATIVE, ADMIN } from './constants/constants';

// pages
import Blog from './routes/Blog/Blog';

import UserDashboard from './routes/UserRoutes/Dashboard/UserDashboard';
import UserClasses from './routes/UserRoutes/MyClasses/UserClasses';
import UserFindClasses from './routes/UserRoutes/FindClasses/UserFindClasses';
import UserSpeakingExercises from './routes/UserRoutes/UserSpeakingExercises/UserSpeakingExercises';
import UserGrades from './routes/UserRoutes/Grades/UserGrades';
import NewSpeakingExercise from './routes/UserRoutes/NewSpeakingExercise/NewSpeakingExercise';

import TeacherDashboard from './routes/TeacherRoutes/Dashboard/TeacherDashboard';
import TeacherClasses from './routes/TeacherRoutes/Classes/TeacherClasses';
import TeacherAssignments from './routes/TeacherRoutes/Assignments/TeacherAssignments';

import NativeDashboard from './routes/NativeRoutes/Dashboard/NativeDashboard';
import NativeExercises from './routes/NativeRoutes/Exercises/NativeExercises';
import NativeRequests from './routes/NativeRoutes/Requests/NativeRequests';

import AdminDashboard from './routes/AdminRoutes/Dashboard/AdminDashboard';

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
          <Route path="/user/speaking-lessons/new-exercise" element={<NewSpeakingExercise />} />
          <Route path="grades" element={<UserGrades />} />
          <Route path="blog" element={<Blog />} />
        </Route>
      </Route>

      <Route element={<RequireAuth allowedRoles={TEACHER}/>} >
        <Route path="/teacher" element={<Layout userType={TEACHER} />}>
          <Route path="" element={<TeacherDashboard />} />
          <Route path="classes" element={<TeacherClasses />} />
          <Route path="assignments" element={<TeacherAssignments />} />
          {/* <Route path="/teacher/assignments/grade" element={<TeacherDashboard />} /> */}
          <Route path="blog" element={<Blog />} />
        </Route>
      </Route>

      <Route element={<RequireAuth allowedRoles={NATIVE}/>} >
        <Route path="/native" element={<Layout userType={NATIVE} />}>
          <Route path="" element={<NativeDashboard />} />
          <Route path="exercises" element={<NativeExercises />} />
          <Route path="requests" element={<NativeRequests />} />
          <Route path="blog" element={<Blog />} />
        </Route>
      </Route>

      <Route element={<RequireAuth allowedRoles={ADMIN}/>} >
        <Route path="/admin" element={<Layout userType={ADMIN} />}>
          <Route path="" element={<AdminDashboard />}></Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
