import React from "react";
import {
	FiHome,
	FiCalendar,
	FiUsers,
	FiTrendingUp,
    FiUser
} from "react-icons/fi";
import { IoIosLogOut } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = ({ open, setOpen }) => {
	const location = useLocation();
    const navigate = useNavigate();

    const navigateTo = (path) => {
        navigate(path);
        if (window.innerWidth < 1280 && open) setOpen(false);
    }

	return (
		<div className={`w-72 ${open ? "left-0" : "-left-60"} transition-all duration-500 fixed xl:static`}>
			<div className="flex flex-col h-[calc(100vh-63px)] fixed justify-between py-4 px-6 bg-black text-white">
				<ul className="space-y-4">
					<li
                        onClick={() => navigateTo("/feed")}
						className={`flex items-center gap-3 rounded-md hover:bg-gray-800 p-4 cursor-pointer ${location.pathname === '/feed' && 'bg-gray-800'}`}
					>
						<FiHome />
						<span>Feed</span>
					</li>
					<li
                        onClick={() => navigateTo("/events")}
						className={`flex items-center gap-3 rounded-md hover:bg-gray-800 p-4 cursor-pointer ${location.pathname === '/events' && 'bg-gray-800'}`}
					>
						<FiCalendar />
						<span>Events</span>
					</li>
					<li
                        onClick={() => navigateTo("/organizations")}
						className={`flex items-center gap-3 rounded-md hover:bg-gray-800 p-4 cursor-pointer ${location.pathname === '/organizations' && 'bg-gray-800'}`}
					>
						<FiUsers />
						<span>Organizations</span>
					</li>
					<li
                        onClick={() => navigateTo("/opportunities")}
						className={`flex items-center gap-3 rounded-md hover:bg-gray-800 p-4 cursor-pointer ${location.pathname === '/opportunities' && 'bg-gray-800'}`}
					>
						<FiTrendingUp />
						<span>Opportunities</span>
					</li>
					<li
                        onClick={() => navigateTo("/profile")}
						className={`flex items-center gap-3 rounded-md hover:bg-gray-800 p-4 cursor-pointer ${location.pathname === '/profile' && 'bg-gray-800'}`}
					>
						<FiUser />
						<span>Profile</span>
					</li>
				</ul>
				<li
                    onClick={() => navigateTo("/")}
                    className="flex items-center gap-3 rounded-md hover:bg-gray-800 p-4 cursor-pointer"
                >
					<IoIosLogOut />
					<span>Logout</span>
				</li>
			</div>
		</div>
	);
};

export default Sidebar;
