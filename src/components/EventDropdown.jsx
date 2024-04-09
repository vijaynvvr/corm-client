import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const EventDropdown = ({ menu }) => {
    const navigate = useNavigate();
    const activeOrg = useSelector(store => store.user.activeOrg);

    return (
        <div className={`w-36 flex flex-col absolute bottom-6 right-10 ${menu ? 'opacity-100' : 'opacity-0'} transition-all duration-500 z-10 rounded-lg`}>
            <button onClick={() => navigate(`/org_profile/${activeOrg._id}/events/${menu}`)} className="text-sm border-b px-4 py-1 bg-black text-white hover:bg-gray-800 cursor-pointer rounded-t-lg">View</button>
            <button onClick={() => navigate(`/org_profile/${activeOrg._id}/events/${menu}/edit`)} className="text-sm border-b px-4 py-1 bg-black text-white hover:bg-gray-800 cursor-pointer">Edit</button>
            <button onClick={() => navigate(`/org_profile/${activeOrg._id}/events/${menu}/attendees`)} className="text-sm border-b px-4 py-1 bg-black text-white hover:bg-gray-800 cursor-pointer rounded-b-lg">Attendees</button>
        </div>
    );
}

export default EventDropdown;