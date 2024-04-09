import React from "react";
import { Link } from "react-router-dom";
import api from "../api";

const OrgProfileCard = ({ id, path, orgName, fetchOrgList }) => {
    const unfollowOrg = async () => {
        try {
            const { data } = await api.put(`/organization/toggleFollow/${id}`);
            if (data.success) {
                console.log("Organization unfollowed successfully");
                fetchOrgList();
            } else {
                console.error(data.message);
            }
        } catch (error) {
            console.error("Unable to unfollow organization:", error);
        }
    };

	return (
		<div className="w-full space-x-4 text-base p-2 flex justify-between cursor-pointer border rounded-xl shadow-lg hover:shadow-xl">
            <Link to={`/organizations/${id}`} className="flex items-center gap-2">
                <img
                    src={path}
                    alt={`${orgName}-name`}
                    className="w-12 aspect-square rounded-full"
                />
                <h1 className="font-medium">{orgName}</h1>
            </Link>
            <button onClick={unfollowOrg} className="text-sm flex items-center gap-2 px-2 py-1 bg-slate-950 text-white hover:bg-slate-800 rounded-md cursor-pointer border-2 border-slate-900">Unfollow</button>
		</div>
	);
};

export default OrgProfileCard;
