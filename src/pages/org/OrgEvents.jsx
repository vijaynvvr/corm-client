import React from "react";
import event from "../../assets/HeroCard/event.jpg";
import organization from "../../assets/HeroCard/organization.jpg";
import opportunity from "../../assets/HeroCard/opportunity.jpg";
import { FiSearch } from "react-icons/fi";

import OrgEventCard from "../../components/OrgEventCard";

const OrgEvents = () => {
	return (
		<div className="w-full p-4 space-y-6 flex flex-col">
			<h1 className="text-4xl">Hi Vijay! Welcome to CoRM!</h1>
			<div className="w-full flex flex-col flex-grow-0 gap-4">
				<OrgEventCard
                    id={1}
					img={event}
					title="Web Development Workshop"
					organization="Google Developer Student Club"
                    date="24 Mar, 2024"
                    time="2 min ago"
				/>
				<OrgEventCard
                    id={2}
					img={organization}
					title="Web Development Workshop"
					organization="Google Developer Student Club"
                    date="12 May, 2024"
                    time="2 min ago"
				/>
				<OrgEventCard
                    id={2}
					img={opportunity}
					title="Web Development Workshop"
					organization="Google Developer Student Club"
                    date="12 May, 2024"
                    time="2 min ago"
				/>
				{/*<OrgEventCard
                    id={2}
					img={organization}
					title="Web Development Workshop"
					organization="Google Developer Student Club"
                    date="12 May, 2024"
                    time="2 min ago"
				/>
				<OrgEventCard
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

export default OrgEvents;
