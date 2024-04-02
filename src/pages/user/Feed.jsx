import React from "react";
import event from "../../assets/HeroCard/event.jpg";
import organization from "../../assets/HeroCard/organization.jpg";
import opportunity from "../../assets/HeroCard/opportunity.jpg";
import { FiSearch } from "react-icons/fi";

import FeedEventCard from "../../components/FeedEventCard";

const Feed = () => {
	return (
		<div className="w-full p-4 space-y-6 flex flex-col items-center">
			<h1 className="text-4xl">Hi Vijay! Welcome to CoRM!</h1>
			<div className="flex flex-col flex-grow-0 gap-4">
				<FeedEventCard
                    id={1}
					img={event}
					title="Web Development Workshop"
					organization="Google Developer Student Club"
                    date="24 Mar, 2024"
                    time="2 min ago"
				/>
				<FeedEventCard
                    id={2}
					img={organization}
					title="Web Development Workshop"
					organization="Google Developer Student Club"
                    date="12 May, 2024"
                    time="2 min ago"
				/>
				{/* <FeedEventCard
                    id={2}
					img={opportunity}
					title="Web Development Workshop"
					organization="Google Developer Student Club"
                    date="12 May, 2024"
                    time="2 min ago"
				/>
				<FeedEventCard
                    id={2}
					img={organization}
					title="Web Development Workshop"
					organization="Google Developer Student Club"
                    date="12 May, 2024"
                    time="2 min ago"
				/>
				<FeedEventCard
                    id={2}
					img={organization}
					title="Web Development Workshop"
					organization="Google Developer Student Club"
                    date="12 May, 2024"
                    time="2 min ago"
				/> */}
			</div>
		</div>
	);
};

export default Feed;
