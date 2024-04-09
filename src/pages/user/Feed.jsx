import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FeedEventCard from "../../components/FeedEventCard";
import api from "../../api";

const Feed = () => {
    const user = useSelector(store => store.user.data)
    const [feed, setFeed] = useState({
        feedStatus: false,
        feedData: null,
        message: "Please add your interests in your profile to help us build your feed"
    });

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await api.get('/event/fetchFeed');
            setFeed({
                feedStatus: data.feed,
                feedData: data.events ? data.events : null,
                message: data.message
            });
        }
        fetchData();
    }, []);

    return (
		<div className="w-full p-4 space-y-6 flex flex-col items-center">
			<h1 className="text-4xl">Hey {user.firstName}, Welcome to CoRM!</h1>
			<div className="flex flex-col justify-center flex-grow gap-4">
                {
                    feed.feedStatus ? (
                        feed.feedData.map(event => (
                            <FeedEventCard
                                key={event._id}
                                id={event._id}
                                logo={event.logo.url}
                                title={event.title}
                                organizer={event.organizer.name}
                                eventTime={event.eventTime}
                                createdAt={event.createdAt}
                            />
                        ))
                    ) : (
                        <p className="mb-32 p-4 bg-gray-200 text-2xl rounded-xl shadow-xl">{feed.message}</p>
                    )
                }

			</div>
		</div>
	);
};

export default Feed;
