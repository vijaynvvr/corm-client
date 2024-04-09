import React, { useState } from "react";
import event from "../../assets/HeroCard/event.jpg";
import { useSelector } from "react-redux";
import FeedEventCard from "../../components/FeedEventCard";

const Feed = () => {
    const user = useSelector(store => store.user.data)
    const [feed, setFeed] = useState(null);

    return (
		<div className="w-full p-4 space-y-6 flex flex-col items-center">
			<h1 className="text-4xl">Hey {user.firstName}, Welcome to CoRM!</h1>
			<div className="flex flex-col flex-grow-0 gap-4">
				<FeedEventCard
                    id={1}
					logo={event}
					title="Web Development Workshop"
					organizer="Google Developer Student Club"
                    eventTime="24 Mar, 2024"
                    createdAt="2 min ago"
				/>
				<FeedEventCard
                    id={1}
					logo={event}
					title="Web Development Workshop"
					organizer="Google Developer Student Club"
                    eventTime="24 Mar, 2024"
                    createdAt="2 min ago"
				/>
				<FeedEventCard
                    id={1}
					logo={event}
					title="Web Development Workshop"
					organizer="Google Developer Student Club"
                    eventTime="24 Mar, 2024"
                    createdAt="2 min ago"
				/>
			</div>
		</div>
	);
};

export default Feed;
