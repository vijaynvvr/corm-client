import React, { useEffect, useState } from "react";
import {Routes, Route} from "react-router-dom";

import Header from "./components/Header";

import Public from "./components/Public";
import Main from "./pages/user/Main";
import Login from "./pages/user/Login";
import Register from "./pages/user/Register";

import Protected from "./components/Protected";
import Feed from "./pages/user/Feed";
import Events from "./pages/user/Events";
import Orgs from "./pages/user/Orgs";
import Opportunities from "./pages/user/Opportunities";
import EventDetail from "./pages/user/EventDetail";
import OrgDetail from "./pages/user/OrgDetail";
import UserProfile from "./pages/user/UserProfile";
import EditProfile from "./pages/user/EditProfile";

import OrgAuth from "./components/OrgAuth";
import OrgAnalytics from "./pages/org/OrgAnalytics";
import OrgEvents from "./pages/org/OrgEvents";
import OrgOpportunities from "./pages/org/OrgOpportunities";
import OrgPortfolio from "./pages/org/OrgPortfolio";
import OrgSettings from "./pages/org/OrgSettings";
import { useDispatch } from "react-redux";
import { loginHandler, setOrgMode } from "./store/slices/userSlice";

const App = () => {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        const activeOrg = JSON.parse(localStorage.getItem("activeOrg"));
        if (user && user.access_token) {
            dispatch(loginHandler({ data: user }))
            dispatch(setOrgMode(activeOrg))
        }
    }, []);

	return (
		<div className="flex flex-col min-h-screen text-xl overflow-x-hidden">
            <Header open={open} setOpen={setOpen}/>
            <div className="flex flex-grow w-screen">
                <Routes>
                    <Route element={<Public />}>
                        <Route path='/' element={<Main />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </Route>
                    <Route element={<Protected open={open} setOpen={setOpen} />}>
                        <Route path='/feed' element={<Feed />} />
                        <Route path='/events' element={<Events />} />
                        <Route path='/events/:id' element={<EventDetail />} />
                        <Route path='/organizations' element={<Orgs />} />
                        <Route path='/organizations/:id' element={<OrgDetail />} />
                        <Route path='/opportunities' element={<Opportunities />} />
                        <Route path='/profile' element={<UserProfile />} />
                        <Route path='/profile/edit' element={<EditProfile />} />
                    </Route>
                    <Route element={<OrgAuth open={open} setOpen={setOpen} />}>
                        <Route path="/org_profile/:id/analytics" element={<OrgAnalytics />}></Route>
                        <Route path="/org_profile/:id/events" element={<OrgEvents />}></Route>
                        <Route path="/org_profile/:id/opportunities" element={<OrgOpportunities />}></Route>
                        <Route path="/org_profile/:id/portfolio" element={<OrgPortfolio />}></Route>
                        <Route path="/org_profile/:id/settings" element={<OrgSettings />}></Route>
                    </Route>
                </Routes>
            </div>
		</div>
	);
};

export default App;
