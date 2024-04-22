import React, { useEffect, useRef, useState } from "react";
import { FiUsers, FiCalendar, FiClock, FiMoreVertical } from "react-icons/fi";
import EventDropdown from "./EventDropdown";
import { formatDate, timeAgo } from "../utils/date_time_format";
import sample_event_logo from "../assets/event_sample_logo.jpeg";

const OrgEventCard = ({ eventData }) => {
    const [menu, setMenu] = useState(null);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) setMenu(null);
        };
        window.addEventListener("click", handleClickOutside);
        return () => window.removeEventListener("click", handleClickOutside);
    }, []);
	return (
		<div className="w-full flex justify-between border-2 hover:shadow-md rounded-xl cursor-pointer">
            <div className="flex flex-col sm:flex-row gap-4 items-center p-4">
                <img
                    src={eventData.logo.url ? eventData.logo.url : sample_event_logo}
                    alt={`${eventData.title}-img`}
                    className="h-32 aspect-video rounded-2xl"
                />
                <div className="p-4 space-y-3 rounded-b-xl">
                    <h3 className="font-bold">{eventData.title}</h3>
                    <p className="flex items-center gap-2 text-base text-gray-600">
                        <FiUsers />
                        <span>{eventData.organizer.name}</span>
                    </p>
                    <p className="flex gap-4 justify-between text-sm text-gray-800">
                        <span className="flex items-center gap-2">
                            <FiCalendar /> 
                            <span>{formatDate(eventData.eventTime)}</span>
                        </span>
                        <span className="flex items-center gap-2">
                            <FiClock /> 
                            <span>{timeAgo(eventData.createdAt)}</span>
                        </span>
                    </p>
                </div>
			</div>
            <div className="relative" ref={menuRef}>
                <button onClick={() => setMenu(prevState => prevState ? null : eventData._id)} className="relative h-fit aspect-square p-2 m-4 hover:bg-gray-100 rounded-full">
                    <FiMoreVertical />
                </button>
                <EventDropdown menu={menu}/>
            </div>
		</div>
	);
}

export default OrgEventCard;