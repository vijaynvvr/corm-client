import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { setOrgMode, setOrgName } from '../store/slices/userSlice';

const Menu = ({menu}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const navigateTo = (id) => {
        dispatch(setOrgMode());
        dispatch(setOrgName(id))
        navigate(`org/analytics/${id}`);
    }

    return (
        <div className={`${menu ? 'left-0' : 'left-56'} transition-all duration-500 bg-white border-2 w-[215px] max-h-[150px] overflow-y-auto z-10 flex flex-col absolute rounded-b-md`}>
            <button onClick={() => navigateTo("GDSC")} className="text-sm border-b border-white px-4 py-1 bg-black text-white hover:bg-gray-800 cursor-pointer">GDSC</button>
            <button onClick={() => navigateTo("COSC")} className="text-sm border-b border-white px-4 py-1 bg-black text-white hover:bg-gray-800 cursor-pointer">COSC</button>
            <button onClick={() => navigateTo("MUN")} className="text-sm border-b border-white px-4 py-1 bg-black text-white hover:bg-gray-800 cursor-pointer">MUN</button>
            <button onClick={() => navigateTo("CCD")} className="text-sm border-b border-white px-4 py-1 bg-black text-white hover:bg-gray-800 cursor-pointer">CCD</button>
            <button onClick={() => navigateTo("TMC")} className="text-sm border-b border-white px-4 py-1 bg-black text-white hover:bg-gray-800 cursor-pointer">TMC</button>
        </div>
    )
}

export default Menu