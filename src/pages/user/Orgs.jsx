import React, { useEffect, useState } from "react";
import OrgCard from "../../components/OrgCard";
import { FiSearch } from "react-icons/fi";
import api from "../../api";

const Orgs = () => {
	const [orgList, setOrgList] = useState([]);
	const [query, setQuery] = useState("");

	useEffect(() => {
		const fetchOrgList = async () => {
            const { data } = await api.get(`/organization/getAll${query ? `?name=${query}` : ''}`);
			setOrgList(data.orgs);
		};
		fetchOrgList();
	}, [query]);

	return (
		<div className="w-full flex flex-col items-center p-4 space-y-6">
			<h1 className="text-4xl">Organizations</h1>
			<div className="flex">
				<input
					type="text"
					placeholder="Search organizations..."
					className="px-4 py-2 border-2 border-black"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
				/>
				<button className="p-4 border-2 border-l-0 border-black text-xl hover:bg-gray-200 active:bg-gray-300">
					<FiSearch />
				</button>
			</div>
			<div className="flex flex-col items-center gap-4">
				{orgList.map((org) => {
					return (
						<OrgCard
							key={org._id}
							id={org._id}
							path={org.logo.url}
							orgName={org.name}
							about={org.about}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Orgs;
