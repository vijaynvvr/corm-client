import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import EventCard from "../../components/EventCard";
import api from "../../api";
import sample_event_logo from "../../assets/event_sample_logo.jpeg";

const Events = () => {
    const [query, setQuery] = useState('');
    const [eventList, setEventList] = useState([]);
    const [eventCategoryList, setEventCategoryList] = useState({});

    useEffect(() => {
        const fetchEventList = async () => {
            const { data } = await api.get(`/event/fetchAllEvents${query ? `?title=${query}` : ''}`);
            setEventList(data.events);
            setEventCategoryList(data.events.reduce((acc, event) => {
                if (acc.hasOwnProperty(event.category)) acc[event.category].push(event);
                else acc[event.category] = [event];
                return acc;
            }, {}))
        }
        fetchEventList();
    }, [query]);

    if (!eventList.length) return <p>Loading...</p>

	return (
		<div className="w-full py-4 space-y-6 px-12">
			{/* <h1 className="text-4xl text-center">Events</h1> */}
			<div className="flex justify-center">
				<input
					type="text"
					placeholder="Search for events..."
					className="px-4 py-2 border-2 border-black"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
				/>
				<button className="p-4 border-2 border-l-0 border-black text-xl hover:bg-gray-200 active:bg-gray-300">
					<FiSearch />
				</button>
			</div>
            {Object.keys(eventCategoryList).map(category => (
                <React.Fragment key={category}>
                    <h1 className="font-bold">{category}</h1>
                    <div className="flex flex-wrap gap-4">
                        {eventCategoryList[category].map(event => (
                            <EventCard
                                key={event._id}
                                id={event._id}
                                img={event.logo.url ? event.logo.url : sample_event_logo}
                                title={event.title}
                                category={event.category}
                                organization={event.organizer.name}
                                date={event.eventTime}
                                time={event.createdAt}
                            />
                        ))}
                    </div>
                </React.Fragment>
            ))}
		</div>
	);
};

export default Events;
