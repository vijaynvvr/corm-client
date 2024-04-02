import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import Sidebar from './Sidebar';

const OrgAuth = ({ redirectPath = "/login", open, setOpen }) => {
    const loginStatus = useSelector(store => store.user.isLoggedIn)
    const userMode = useSelector(store => store.user.userMode)

    useEffect(() => {
        const handleResize = () => {
            setOpen(window.innerWidth > 1280);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // useEffect(() => {
    //     setOpen(window.innerWidth > 1280);
    // }, []);

    if (!loginStatus) {
        return <Navigate to={redirectPath} replace />
    }
    if (userMode !== "org") {
        return <Navigate to={"/feed"} replace />
    }
 
    return (
        <>
            <Sidebar open={open} setOpen={setOpen}/>
            <Outlet />
        </>
    )
}

export default OrgAuth;