import React from "react";
import {
	FiHome,
	FiCalendar,
	FiUsers,
	FiTrendingUp,
    FiUser,
    FiPieChart,
    FiSettings
} from "react-icons/fi";
import { IoIosLogOut } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { handleLogin, setOrgName, setUserMode } from "../store/slices/userSlice";



const Sidebar = ({ open, setOpen }) => {
	const location = useLocation();
    const navigate = useNavigate();
    const userMode = useSelector(store => store.user.userMode)
    const dispatch = useDispatch();
    const orgName = useSelector(store => store.user.orgName);

    const SIDEBAR_ITEMS = {
        user: [
            {path: "/feed", title: "Feed", icon: FiHome},
            {path: "/events", title: "Events", icon: FiCalendar},
            {path: "/organizations", title: "Organizations", icon: FiUsers},
            {path: "/opportunities", title: "Opportunities", icon: FiTrendingUp},
            {path: "/profile", title: "Profile", icon: FiUser},
        ],
        org: [
            {path: `/org/analytics/${orgName}`, title: "Analytics", icon: FiPieChart},
            {path: `/org/events/${orgName}`, title: "Events", icon: FiCalendar},
            {path: `/org/opportunities/${orgName}`, title: "Opportunities", icon: FiTrendingUp},
            {path: `/org/portfolio/${orgName}`, title: "Portfolio", icon: FiUser},
            {path: `/org/settings/${orgName}`, title: "Settings", icon: FiSettings},
        ]
    }


    const navigateTo = (path) => {
        navigate(path);
        if (window.innerWidth < 1280 && open) setOpen(false);
    }

    const items = SIDEBAR_ITEMS[userMode];

	return (
		<div className={`w-72 ${open ? "left-0" : "-left-60"} transition-all duration-500 fixed xl:static`}>
			<div className={`flex flex-col h-[calc(100vh-63px)] fixed justify-between py-4 px-6 ${userMode === "user" ? "bg-black" : "bg-gray-900"} bg-black text-white`}>
				<ul className="space-y-4">
                    {items.map((item, index) => (
                        <li
                            key={index}
                            onClick={() => navigateTo(item.path)}
                            className={`flex items-center gap-3 rounded-md hover:bg-gray-800 p-4 cursor-pointer ${location.pathname === item.path && 'bg-gray-800'}`}
                        >
                            <item.icon />
                            <span>{item.title}</span>
                        </li>
                    ))}
				</ul>
                {userMode === "user" ? (
                    <li
                        onClick={() => {
                            dispatch(handleLogin(false));
                        }}
                        className="flex items-center gap-3 rounded-md hover:bg-gray-800 p-4 cursor-pointer"
                    >
                        <IoIosLogOut />
                        <span>Logout</span>
                    </li>
                ) : (
                    <li
                        onClick={() => {
                            dispatch(setUserMode());
                            dispatch(setOrgName(null));
                        }}
                        className="flex items-center gap-3 rounded-md hover:bg-gray-800 p-4 cursor-pointer"
                    >
                        <IoIosLogOut />
                        <span>Back to User</span>
                    </li>
                )}
			</div>
		</div>
	);
};

export default Sidebar;
