import React from "react";

const OrgCard = ({ path, orgName, about }) => {
	return (
		<div className="flex flex-col sm:flex-row gap-4 w-full xl:w-8/12 cursor-pointer border rounded-xl shadow-lg hover:shadow-xl">
			<img
				src={path}
				alt={`${orgName}-name`}
				className="w-full sm:w-3/12 rounded-l-xl"
			/>
			<div className="space-y-2 p-2">
				<h1 className="font-bold">{orgName}</h1>
				<p className="text-base text-gray-600">{about}</p>
			</div>
		</div>
	);
};

export default OrgCard;
