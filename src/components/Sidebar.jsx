import React from "react";
import {
	FiHome,
	FiCalendar,
	FiUsers,
	FiTrendingUp,
	FiSettings,
} from "react-icons/fi";
import { IoIosLogOut } from "react-icons/io";
import { NavLink, useLocation } from "react-router-dom";

const Sidebar = ({ open }) => {
	const location = useLocation();
	return (
		<div className={`w-72 ${open ? "block" : "hidden"}`}>
			<div className="flex flex-col h-[calc(100vh-63px)] fixed justify-between py-4 px-6 bg-black text-white">
				<ul className="space-y-4">
					<NavLink
						to="/feed"
						className={`flex items-center gap-3 rounded-md hover:bg-gray-800 p-4 cursor-pointer ${location.pathname === '/feed' && 'bg-gray-800'}`}
					>
						<FiHome />
						<span>Feed</span>
					</NavLink>
					<NavLink
						to="events"
						className={`flex items-center gap-3 rounded-md hover:bg-gray-800 p-4 cursor-pointer ${location.pathname === '/events' && 'bg-gray-800'}`}
					>
						<FiCalendar />
						<span>Events</span>
					</NavLink>
					<NavLink
						to="/organizations"
						className={`flex items-center gap-3 rounded-md hover:bg-gray-800 p-4 cursor-pointer ${location.pathname === '/organizations' && 'bg-gray-800'}`}
					>
						<FiUsers />
						<span>Organizations</span>
					</NavLink>
					<NavLink
						to="/opportunities"
						className={`flex items-center gap-3 rounded-md hover:bg-gray-800 p-4 cursor-pointer ${location.pathname === '/opportunities' && 'bg-gray-800'}`}
					>
						<FiTrendingUp />
						<span>Opportunities</span>
					</NavLink>
					<NavLink
						to="/profile"
						className={`flex items-center gap-3 rounded-md hover:bg-gray-800 p-4 cursor-pointer ${location.pathname === '/profile' && 'bg-gray-800'}`}
					>
						<FiSettings />
						<span>Settings</span>
					</NavLink>
				</ul>
				<NavLink className="flex items-center gap-3 rounded-md hover:bg-gray-800 p-4 cursor-pointer" to='/'>
					<IoIosLogOut />
					<span>Logout</span>
				</NavLink>
			</div>
		</div>
	);
};

export default Sidebar;
