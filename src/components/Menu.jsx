import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { useSelector } from "react-redux";
import { setOrgMode } from '../store/slices/userSlice';

const Menu = ({menu}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const orgPrezList = useSelector(store => store.user.orgPrezList)

    const navigateTo = (org) => {
        dispatch(setOrgMode(org));
        navigate(`org_profile/${org._id}/analytics`);
    }

    return (
        <div className={`${menu ? 'left-0' : 'left-56'} transition-all duration-500 bg-white border-2 w-[215px] max-h-[150px] overflow-y-auto z-10 flex flex-col absolute rounded-b-md`}>
            {
                orgPrezList.length ? (
                    orgPrezList.map(org => (
                        <button key={org._id} onClick={() => navigateTo(org)} className="text-sm border-b border-white px-4 py-1 bg-black text-white hover:bg-gray-800 cursor-pointer">{org.acronym}</button>
                    ))
                ) : (
                    <p className="text-sm border-b border-white px-4 py-1 bg-black text-white hover:bg-gray-800 cursor-pointer">You are not team member of any organization</p>
                )
            }
        </div>
    )
}

export default Menu