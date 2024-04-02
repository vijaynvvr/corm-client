import React from 'react'
import { useNavigate } from 'react-router-dom'

const EventDropdown = ({menu}) => {
    const navigate = useNavigate();

    const navigateTo = (id) => {
        dispatch(setOrgMode());
        dispatch(setOrgName(id))
        navigate(`org/analytics/${id}`);
    }

    return (
        <div className={`w-36 flex flex-col absolute bottom-6 right-10 ${menu ? 'opacity-100' : 'opacity-0'} transition-all duration-500 z-10 rounded-lg`}>
            <button onClick={() => navigateTo("GDSC")} className="text-sm border-b px-4 py-1 bg-black text-white hover:bg-gray-800 cursor-pointer rounded-t-lg">View</button>
            <button onClick={() => navigateTo("COSC")} className="text-sm border-b px-4 py-1 bg-black text-white hover:bg-gray-800 cursor-pointer">Edit</button>
            <button onClick={() => navigateTo("MUN")} className="text-sm border-b px-4 py-1 bg-black text-white hover:bg-gray-800 cursor-pointer rounded-b-lg">Attendees</button>
        </div>
    )
}

export default EventDropdown;