import React, { useEffect, useState } from "react";
import OrgEventCard from "../../components/OrgEventCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoAddCircleOutline } from "react-icons/io5";
import api from "../../api";


const OrgEvents = () => {
    const [eventState, setEventState] = useState("all");
    const activeOrg = useSelector(store => store.user.activeOrg);

    const [eventList, setEventList] = useState([]);
    const [filteredEventList, setFilteredEventList] = useState([]);

    useEffect(() => {
        const fetchEventList = async () => {
            const { data } = await api.get(`/event/fetchAllEvents?orgId=${activeOrg._id}`);
            setEventList(data.events);
            setFilteredEventList(data.events);
        }
        fetchEventList();
    }, []);

    useEffect(() => {
        const filterEvents = () => {
            if (eventState === "all") {
                setFilteredEventList(eventList);
            } else if (eventState === "live") {
                setFilteredEventList(eventList.filter(event => new Date(event.eventTime) > new Date()));
            } else if (eventState === "finished") {
                setFilteredEventList(eventList.filter(event => new Date(event.eventTime) < new Date()));
            }
        }
        filterEvents();
    }, [eventState]);

    if (!eventList.length) return <p>Loading...</p>

	return (
		<div className="w-full p-4 space-y-4 flex flex-col">
            <div className="flex flex-row-reverse justify-between items-center px-1">
                <ul className="text-base flex text-center bg-black p-2 rounded-full">
                    <li onClick={() => setEventState("all")} className={`cursor-pointer w-20 p-1 ${eventState === "all" && 'bg-gray-700'} hover:bg-gray-800 text-white rounded-full`}>All</li>
                    <li onClick={() => setEventState("live")} className={`cursor-pointer w-20 p-1 ${eventState === "live" && 'bg-gray-700'} hover:bg-gray-800 text-white rounded-full`}>Live</li>
                    <li onClick={() => setEventState("finished")} className={`cursor-pointer w-20 p-1 ${eventState === "finished" && 'bg-gray-700'} hover:bg-gray-800 text-white rounded-full`}>Finished</li>
                </ul>
                <Link to={`/org_profile/${activeOrg._id}/events/create`} className="text-lg flex items-center gap-2 px-3 py-2 text-white bg-black rounded-lg hover:bg-gray-800">
                    <IoAddCircleOutline />
                    Create Event
                </Link>
            </div>
			<div className="w-full flex flex-col flex-grow-0 gap-4">
                {filteredEventList.length ? (
                    filteredEventList.map(event => (
                        <OrgEventCard
                            key={event._id}
                            id={event._id}
                            img={event.logo.url}
                            title={event.title}
                            organization={event.organizer.name}
                            date={event.eventTime}
                            time={event.createdAt}
                        />
                    ))
                ) : (
                    <p>No events in this category.</p>
                )}
			</div>
		</div>
	);
};

export default OrgEvents;
