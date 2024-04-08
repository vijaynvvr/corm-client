import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Sidebar from './Sidebar';

const Protected = ({ redirectPath = "/login", open, setOpen }) => {
    const loginStatus = useSelector(store => store.user.isLoggedIn)
    const activeOrg = useSelector(store => store.user.activeOrg)
    const {pathname} = useLocation();

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
        return <Navigate to={redirectPath} state={pathname} replace />
    }

    if (activeOrg) {
        return <Navigate to={`/org_profile/${activeOrg._id}/analytics`} replace />
    }
 
    return (
        <>
            <Sidebar open={open} setOpen={setOpen}/>
            <Outlet />
        </>
    )
}

export default Protected;