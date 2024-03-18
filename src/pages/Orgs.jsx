import React from "react";
import OrgCard from "../components/OrgCard";
import event from "../assets/HeroCard/event.jpg";
import organization from "../assets/HeroCard/organization.jpg";
import opportunity from "../assets/HeroCard/opportunity.jpg";
import { FiSearch } from "react-icons/fi";

const Orgs = () => {
	return (
		<div className="w-full p-4 space-y-6">
			<h1 className="text-4xl">Organizations</h1>
			<div className="flex">
				<input
					type="text"
					placeholder="Search organizations..."
					className="px-4 py-2 border-2 border-black"
				/>
				<button className="p-4 border-2 border-l-0 border-black text-xl hover:bg-gray-200 active:bg-gray-300">
					<FiSearch />
				</button>
			</div>
			<div className="space-y-4">
				<OrgCard
                    id={1}
					path={event}
					orgName="Google Developer Student Club"
					about="Google Developer Student Clubs (GDSC) are university-based community groups powered by Google Developers for students interested in Technology."
				/>
				<OrgCard
                    id={2}
					path={opportunity}
					orgName="CBIT Open-Source Community"
					about="COSC, an esteemed tech community based in Chaitanya Bharathi Institute of Technology - Hyderabad, is dedicated to promoting an open-source ethos."
				/>
				<OrgCard
                    id={3}
					path={organization}
					orgName="CBIT Model United Nations"
					about="CBITMUN club was started back in 2011 by a group of debate enthusiasts with the motto to set up, encourage and endorse Model United Nations conferences."
				/>
				<OrgCard
                    id={4}
					path={event}
					orgName="GDSC CBIT"
					about="Google Developer Student Clubs (GDSC) are university-based community groups powered by Google Developers for students interested in Technology."
				/>
			</div>
		</div>
	);
};

export default Orgs;
