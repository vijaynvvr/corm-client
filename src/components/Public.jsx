import React from 'react'
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const Public = ({ redirectPath = "/feed" }) => {
    const loginStatus = useSelector(store => store.user.isLoggedIn)

    if (loginStatus) {
        return <Navigate to={redirectPath} replace />
    }
 
    return <Outlet />
}

export default Public;