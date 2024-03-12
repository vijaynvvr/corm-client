import React from "react";
import { FiCodesandbox } from "react-icons/fi";
import HeroCard from "../components/HeroCard";
import event from "../assets/HeroCard/event.jpg";
import organization from "../assets/HeroCard/organization.jpg";
import opportunity from "../assets/HeroCard/opportunity.jpg";

const Main = () => {
	return (
		<div className="flex flex-grow flex-col gap-8 py-8 items-center text-center">
			<div className="flex flex-col gap-6 items-center text-center">
				<span className="text-7xl">
					<FiCodesandbox />
				</span>
				<h1 className="w-8/12 text-5xl font-semibold">
					A one-stop university based social platform
				</h1>
				<p className="text-xl text-gray-500 italic">
					Never miss any events and opportunities at your university.
				</p>
			</div>
			<div className="flex gap-16">
				<HeroCard
					link="/events"
					path={event}
					title="Events"
					desc="Explore various events exclusively hosted at your university"
				/>
				<HeroCard
					link="/organizations"
					path={organization}
					title="Organizations"
					desc="Find out about all the organizations in your university"
				/>
				<HeroCard
					link="/opportunities"
					path={opportunity}
					title="Opportunities"
					desc="Get to know about exciting opportunities at your university"
				/>
			</div>
		</div>
	);
};

export default Main;
