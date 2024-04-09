import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { createPortal } from "react-dom";
import toast from 'react-hot-toast';
import api from "../api";
import { useNavigate } from 'react-router-dom'

const DeleteEventModal = ({modalId, setModalId}) => {
    const activeOrg = useSelector(store => store.user.activeOrg);
    if (!modalId) return null;
    const navigate = useNavigate()

    const deleteEvent = async () => {
        try {
            const {data} = await api.delete(`/event/deleteEvent/${modalId}`);
            if (data.success) {
                toast.success(data.message);
                setModalId(null);
                navigate(`/org_profile/${activeOrg._id}/events`)
            } else {
                toast.error(data.message);
            }
        } catch (err) {
            toast.error(err.response.data.message);
        }
    };

	return createPortal(
		<Fragment>
			<div
				className="backdrop fixed w-screen h-screen z-50 bg-black/50"
				onClick={() => setModalId(null)}
			>
            </div>
			<div className="modal w-96 p-4 bg-white space-y-6 z-[100] fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 shadow-xl rounded-xl">
                <h1 className="text-xl">Are you sure? Do you really want to delete the event?</h1>
                <p className="font-bold">[Note: This action is irreversible]</p>

                <div className="w-full flex justify-between">
                    <button onClick={() => setModalId(null)} className='bg-gray-600 text-white px-4 py-2 rounded-lg border-2  hover:bg-gray-700'>Cancel</button>
                    <button onClick={deleteEvent} className='bg-red-600 text-white px-4 py-2 rounded-lg border-2  hover:bg-red-700'>Confirm</button>
                </div>

			</div>
		</Fragment>,
		document.getElementById("portal")
	);
};

export default DeleteEventModal;
