import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FiUsers, FiCalendar, FiClock } from "react-icons/fi";
import { FiMoreVertical } from "react-icons/fi";
import EventDropdown from "./EventDropdown";


const FeedEventCard = ({ id, img, title, organization, date, time }) => {
    const [like, setLike] = useState(false);
    const [menu, setMenu] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) setMenu(false);
        };
        window.addEventListener("click", handleClickOutside);
        return () => window.removeEventListener("click", handleClickOutside);
    }, []);
	return (
		<div className="w-full flex justify-between border-2 hover:shadow-md rounded-xl cursor-pointer">
            <div className="flex flex-col sm:flex-row gap-4 items-center p-4">
                <img
                    src={img}
                    alt={`${title}-img`}
                    className="h-32 aspect-video rounded-2xl"
                />
                <div className="p-4 space-y-3 rounded-b-xl">
                    <h3 className="font-bold">{title}</h3>
                    <p className="flex items-center gap-2 text-base text-gray-600 hover:underline">
                        <FiUsers />
                        <span>{organization}</span>
                    </p>
                    <p className="flex justify-between text-sm text-gray-800">
                        <span className="flex items-center gap-2">
                            <FiCalendar /> 
                            <span>{date}</span>
                        </span>
                        <span className="flex items-center gap-2">
                            <FiClock /> 
                            <span>{time}</span>
                        </span>
                    </p>
                    {/* <Link to={`/events/${id}`} className="w-[50%] flex justify-center items-center gap-3 text-lg border-2 rounded-r-lg hover:bg-yellow-100">
                        <TfiInfoAlt className="text-yellow-500"/>
                        <span>Visit</span>
                    </Link> */}
                </div>
			</div>
            <div className="relative" ref={menuRef}>
                <button onClick={() => setMenu(prevState => !prevState)} className="relative h-fit aspect-square p-2 m-4 hover:bg-gray-100 rounded-full">
                    <FiMoreVertical />
                </button>
                <EventDropdown menu={menu}/>
            </div>
		</div>
	);
}

export default FeedEventCard;