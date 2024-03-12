import React from "react";
import event from "../assets/HeroCard/event.jpg";
import organization from "../assets/HeroCard/organization.jpg";
import opportunity from "../assets/HeroCard/opportunity.jpg";
import { FiSearch } from "react-icons/fi";

import EventCard from "../components/EventCard";

const Events = () => {
	return (
		<div className="p-4 space-y-6 w-full">
			<h1 className="text-4xl">Events</h1>
			<div className="flex">
				<input
					type="text"
					placeholder="Search for events..."
					className="px-4 py-2 border-2 border-black"
				/>
				<button className="p-4 border-2 border-l-0 border-black text-xl hover:bg-gray-200 active:bg-gray-300">
					<FiSearch />
				</button>
			</div>
            <h1 className="font-bold">Speaker Sessions</h1>
			<div className="flex flex-wrap gap-4">
				<EventCard
                    id={2}
					img={organization}
					title="Web Development Workshop"
					organization="Google Developer Student Club"
                    date="12 May, 2024"
                    time="5 mins ago"
				/>
				<EventCard
                    id={2}
					img={organization}
					title="Web Development Workshop"
					organization="Google Developer Student Club"
                    date="12 May, 2024"
                    time="5 mins ago"
				/>
				<EventCard
                    id={2}
					img={organization}
					title="Web Development Workshop"
					organization="Google Developer Student Club"
                    date="12 May, 2024"
                    time="5 mins ago"
				/>
			</div>
            <h1 className="font-bold">Workshops</h1>
			<div className="flex gap-4">
				<EventCard
                    id={1}
					img={event}
					title="Web Development Workshop"
					organization="Google Developer Student Club"
                    date="24 Mar, 2024"
                    time="5 mins ago"
				/>
				<EventCard
                    id={2}
					img={organization}
					title="Web Development Workshop"
					organization="Google Developer Student Club"
                    date="12 May, 2024"
                    time="5 mins ago"
				/>
				<EventCard
                    id={2}
					img={organization}
					title="Web Development Workshop"
					organization="Google Developer Student Club"
                    date="12 May, 2024"
                    time="5 mins ago"
				/>
				<EventCard
                    id={2}
					img={organization}
					title="Web Development Workshop"
					organization="Google Developer Student Club"
                    date="12 May, 2024"
                    time="5 mins ago"
				/>
			</div>
            <h1 className="font-bold">Hackathons</h1>
			<div className="flex flex-wrap gap-4">
				<EventCard
                    id={1}
					img={event}
					title="Web Development Workshop"
					organization="Google Developer Student Club"
                    date="24 Mar, 2024"
                    time="5 mins ago"
				/>
				<EventCard
                    id={2}
					img={organization}
					title="Web Development Workshop"
					organization="Google Developer Student Club"
                    date="12 May, 2024"
                    time="5 mins ago"
				/>
			</div>
		</div>
	);
};

export default Events;
