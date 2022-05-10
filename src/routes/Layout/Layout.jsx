import React from 'react';
import { Outlet } from "react-router-dom";
import { Box, CssBaseline, Toolbar} from '@mui/material';
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import { UserSidebarData, NativeSidebarData, TeacherSidebarData, AdminSidebarData } from '../../components/Sidebar/SidebarData'; 
import { USER, TEACHER, NATIVE, ADMIN } from '../../constants/constants';


const Layout = (props) => {
    let sidebarData = [];

    switch (props.userType) {
        case USER:
            sidebarData = UserSidebarData;
            break;
        case TEACHER:
            sidebarData = TeacherSidebarData;
            break;
        case NATIVE:
            sidebarData = NativeSidebarData;
            break;
        case ADMIN:
            sidebarData = AdminSidebarData;
            break;
        default:
            break;
    }

  return (
    <Box sx={{ display: 'flex', height: '100vh', width: '100wh', backgroundColor:'#FAFAFA' }}>
      <CssBaseline />
      <Navbar />
      <Sidebar sidebarData={sidebarData}/>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  )
}

export default Layout;
