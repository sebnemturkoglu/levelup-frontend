import { useLocation, Navigate, Outlet } from "react-router-dom";
import React from 'react';
const RequireAuth = ({ allowedRoles }) => {
    // const location = useLocation();
    // const role = JSON.parse(localStorage.getItem('profile')).result.role;

    return (
        // After login the next part will be used to have protected routes
        // allowedRoles?.includes(role)
        //     ? <Outlet />
        //     : <Navigate to={'/'} state={{ from: location }} replace />
        <Outlet />
    )
}


export default RequireAuth;