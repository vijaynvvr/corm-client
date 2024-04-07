import React from 'react'
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const Public = ({ redirectPath = "/feed" }) => {
    const loginStatus = useSelector(store => store.user.isLoggedIn)
    let { state } = useLocation();

    if (loginStatus) {
        if (state) return <Navigate to={state} replace />
        else return <Navigate to={redirectPath} replace />
    }

    return <Outlet />
}

export default Public;