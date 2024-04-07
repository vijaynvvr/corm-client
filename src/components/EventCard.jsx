import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiUsers, FiCalendar, FiClock } from "react-icons/fi";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { BiCategory } from "react-icons/bi";
import { TfiInfoAlt } from "react-icons/tfi";
import { formatDate, timeAgo } from "../../../corm-client-admin/src/utils/date_time_format";

const EventCard = ({ id, img, title, category, organization, date, time }) => {
    const [like, setLike] = useState(false);
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
                <div className="flex pt-2">
                    <button onClick={() => setLike(prev => !prev)} className="w-[50%] flex justify-center items-center gap-3 text-lg border-2 rounded-l-lg hover:bg-red-100">
                        {like ? (
                            <>
                                <GoHeartFill className="text-red-500"/>
                                <span>Unlike</span>
                            </>
                        ) : (
                            <>
                                <GoHeart className="text-red-500"/>
                                <span>Like</span>
                            </>
                        )}
                    </button>
                    <Link to={`/events/${id}`} className="w-[50%] flex justify-center items-center gap-3 text-lg border-2 rounded-r-lg hover:bg-yellow-100">
                        <TfiInfoAlt className="text-yellow-500"/>
                        <span>Visit</span>
                    </Link>
                </div>
			</div>
		</div>
	);
};

export default EventCard;
