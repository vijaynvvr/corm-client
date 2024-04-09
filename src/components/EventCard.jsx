import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiUsers, FiCalendar, FiClock } from "react-icons/fi";
import { BiCategory } from "react-icons/bi";
import { TfiInfoAlt } from "react-icons/tfi";
import { formatDate, timeAgo } from "../utils/date_time_format";
import { useSelector } from "react-redux";

const EventCard = ({ id, img, title, category, organization, date, time }) => {
    const activeOrg = useSelector(store => store.user.activeOrg);
	return (
		<div className="flex flex-col items-center px-1 py-2 border border-gray-300 shadow-md hover:shadow-xl rounded-xl cursor-pointer">
			<img
				src={img}
				alt={`${title}-img`}
				className="w-64 aspect-video rounded-xl"
			/>
			<div className="w-full p-2 space-y-2 rounded-b-xl">
				<h3 className="text-center font-bold">{title}</h3>
                <p className="flex items-center justify-center gap-2 mx-3 text-base border-2 rounded-sm bg-gray-100 hover:bg-gray-200">
                    <BiCategory />
                    <span>{category}</span>
                </p>
				<p className="flex items-center gap-2 text-base text-gray-600 hover:underline">
                    <FiUsers />
                    <span>{organization}</span>
                </p>
                <p className="flex justify-between text-sm text-gray-800">
                    <span className="flex items-center gap-2">
                        <FiCalendar /> 
                        <span>{formatDate(date)}</span>
                    </span>
                    <span className="flex items-center gap-2">
                        <FiClock /> 
                        <span>{timeAgo(time)}</span>
                    </span>
                </p>
                    <Link to={activeOrg ? `/org_profile/${activeOrg._id}/events/${id}` : `/events/${id}`} className="w-full flex justify-center items-center gap-3 text-lg border-2 rounded-lg hover:bg-yellow-100">
                        <TfiInfoAlt className="text-yellow-500"/>
                        <span>Visit</span>
                    </Link>
			</div>
		</div>
	);
};

export default EventCard;
