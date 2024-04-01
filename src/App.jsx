import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import {Routes, Route} from "react-router-dom";
import Main from "./pages/Main";
import Feed from "./pages/Feed";
import Events from "./pages/Events";
import Orgs from "./pages/Orgs";
import Opportunities from "./pages/Opportunities";
import Profile from "./pages/Profile";
import EventDetail from "./pages/EventDetail";
import OrgDetail from "./pages/OrgDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
    const [open, setOpen] = useState(true);
    useEffect(() => {
        const handleResize = () => {
            setOpen(window.innerWidth > 1280);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        setOpen(window.innerWidth > 1280);
    }, []);

	return (
		<div className="text-xl overflow-x-hidden">
            <Header open={open} setOpen={setOpen}/>
            <div className="flex w-screen">
                <Sidebar open={open} setOpen={setOpen}/>
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/feed' element={<Feed />} />
                    <Route path='/events' element={<Events />} />
                    <Route path='/events/:id' element={<EventDetail />} />
                    <Route path='/organizations' element={<Orgs />} />
                    <Route path='/organizations/:id' element={<OrgDetail />} />
                    <Route path='/opportunities' element={<Opportunities />} />
                    <Route path='/profile' element={<Profile email='vijayvardhansn10@gmail.com' firstName='Vijay Vardhan Reddy' lastName='Nandikonda' bio='Computer Science Undergrad. Willing to Connect, Learn and Grow together.'/>} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </div>
		</div>
	);
};

export default App;
