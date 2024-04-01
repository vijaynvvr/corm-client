import React from "react";
import { Link } from "react-router-dom";

const HeroCard = ({ link, path, title, desc }) => {
	return (
		<Link
			to={link}
			className="w-80 border border-gray-300 hover:shadow-xl rounded-xl cursor-pointer"
		>
			<img
				src={path}
				alt={`${title}-img`}
				className="w-80 aspect-video rounded-t-xl"
			/>
			<div className="p-4 space-y-2 rounded-b-xl">
				<h3 className="font-bold">{title}</h3>
				<p className="text-base italic text-gray-600">{desc}</p>
			</div>
		</Link>
	);
};

export default HeroCard;
