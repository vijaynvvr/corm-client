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
import { logoutHandler, setOrgMode } from "../store/slices/userSlice";


const Sidebar = ({ open, setOpen }) => {
	const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const activeOrg = useSelector(store => store.user.activeOrg);

    const SIDEBAR_ITEMS = {
        user: [
            {path: "/feed", title: "Feed", icon: FiHome},
            {path: "/events", title: "Events", icon: FiCalendar},
            {path: "/organizations", title: "Organizations", icon: FiUsers},
            {path: "/opportunities", title: "Opportunities", icon: FiTrendingUp},
            {path: "/profile", title: "Profile", icon: FiUser},
        ],
        org: [
            {path: `/org_profile/${activeOrg?._id}/analytics`, title: "Analytics", icon: FiPieChart},
            {path: `/org_profile/${activeOrg?._id}/events`, title: "Events", icon: FiCalendar},
            {path: `/org_profile/${activeOrg?._id}/opportunities`, title: "Opportunities", icon: FiTrendingUp},
            {path: `/org_profile/${activeOrg?._id}/portfolio`, title: "Portfolio", icon: FiUser},
            {path: `/org_profile/${activeOrg?._id}/settings`, title: "Settings", icon: FiSettings},
        ]
    }

    const items =  SIDEBAR_ITEMS[activeOrg ? "org" : "user"];

    const navigateTo = (path) => {
        navigate(path);
        if (window.innerWidth < 1280 && open) setOpen(false);
    }

	return (
		<div className={`w-72 ${open ? "left-0" : "-left-60"} transition-all duration-500 fixed xl:static`}>
			<div className={`flex flex-col h-[calc(100vh-63px)] fixed justify-between py-4 px-6 ${!activeOrg ? "bg-black" : "bg-gray-900"} bg-black text-white`}>
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
                {!activeOrg ? (
                    <li
                        onClick={() => {
                            dispatch(logoutHandler());
                        }}
                        className="flex items-center gap-3 rounded-md hover:bg-gray-800 p-4 cursor-pointer"
                    >
                        <IoIosLogOut />
                        <span>Logout</span>
                    </li>
                ) : (
                    <li
                        onClick={() => dispatch(setOrgMode(null))}
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
