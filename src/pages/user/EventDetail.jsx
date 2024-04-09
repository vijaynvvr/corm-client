import React, { useEffect, useState } from 'react'
import { useLocation  } from 'react-router-dom';
import { FiUsers, FiMapPin, FiCalendar, FiClock } from "react-icons/fi";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { IoSaveOutline, IoSaveSharp } from "react-icons/io5";
import api from '../../api';
import { formatDate, timeAgo } from '../../utils/date_time_format';
import sample_event_logo from '../../assets/event_sample_logo.jpeg';

const EventDetail = () => {
    const [like, setLike] = useState(false);
    const [register, setRegister] = useState(false);
    const location = useLocation();
    const eventId = location.pathname.split("/")[2]
    const [eventData, setEventData] = useState(null);

    const fetchEventData = async () => {
        const {data} = await api.get(`/event/fetchEvent/${eventId}`);
        setEventData(data.event);
        setLike(data.isLiked);
        setRegister(data.isRegistered);
    }

    const toggleLike = async () => {
        try {
            const { data } = await api.put(`/event/toggleLike/${eventId}`);
            if (data.success) {
                fetchEventData();
            } else {
                console.error(data.message);
            }
        } catch (error) {
            console.error("Unable to like/dislike event:", error);
        }
    };

    const toggleRegister = async () => {
        try {
            const { data } = await api.put(`/event/toggleRegister/${eventId}`);
            if (data.success) {
                fetchEventData();
            } else {
                console.error(data.message);
            }
        } catch (error) {
            console.error("Unable to register/unregister event:", error);
        }
    };

    useEffect(() => {
        fetchEventData();
    }, []);

    if (!eventData) return <p>Loading...</p>

    return (
        <div className='w-full py-4 flex flex-col gap-6 items-center'>
            <div className='w-10/12 flex flex-col md:flex-row items-center justify-center gap-8'>
                <img src={eventData.logo.url ? eventData.logo.url : sample_event_logo} alt='event-img' className='w-full md:w-5/12 h-64 rounded-lg'></img>
                <div className="w-full md:w-7/12 py-4 md:p-4 space-y-2 rounded-b-xl text-gray-600">
                    <h3 className="font-bold text-3xl">{eventData.title}</h3>
                    <p className="flex items-center gap-2 text-xl hover:underline">
                        <FiUsers className='text-gray-800'/>
                        <span><span className='text-black'>by</span> {eventData.organizer.name}</span>
                    </p>
                    <span className="flex items-center gap-2">
                        <FiMapPin className='text-gray-800'/> 
                        <span><span className='text-black'>at</span> {eventData.venue}</span>
                    </span>
                    <span className="flex items-center gap-2">
                        <FiCalendar className='text-gray-800'/> 
                        <span><span className='text-black'>on</span> {formatDate(eventData.eventTime)}</span>
                    </span>
                    <span className="flex items-center gap-2">
                        <FiClock className='text-gray-800'/> 
                        <span><span className='text-black'>published</span> {timeAgo(eventData.createdAt)}</span>
                    </span>
                    <div className="flex gap-4 pt-2">
                        <button onClick={toggleLike} className={`w-fit px-4 flex items-center gap-3 text-lg border-2 rounded-lg border-red-500 ${like ? 'bg-red-100': 'bg-gray-100'} hover:bg-red-100`}>
                            {like ? (
                                <>
                                    <GoHeartFill className="text-red-500"/>
                                    <span>Liked</span>
                                </>
                            ) : (
                                <>
                                    <GoHeart className="text-red-500"/>
                                    <span>Like</span>
                                </>
                            )}
                        </button>
                        <button onClick={toggleRegister} disabled={new Date(eventData.eventTime) < new Date()} className={`w-fit px-4 flex items-center gap-3 text-lg border-2 rounded-lg border-blue-500 ${register ? 'bg-blue-100': 'bg-gray-100'} hover:bg-blue-100`}>
                            {register ? (
                                <>
                                    <IoSaveSharp className="text-blue-500"/>
                                    <span>Registered</span>
                                </>
                            ) : (
                                <>
                                    <IoSaveOutline className="text-blue-500"/>
                                    <span>Register</span>
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            <div className='w-10/12 space-y-2 text-base'>
                <h1 className='text-2xl font-semibold'>Event Info</h1>
                <table className='w-full border border-gray-400 text-center'>
                    <thead>
                        <tr className='bg-gray-200'>
                            <th className='py-2 border-b border-gray-400'>Views</th>
                            <th className='py-2 border-b border-gray-400'>Likes</th>
                            <th className='py-2 border-b border-gray-400'>Registrations</th>
                            <th className='py-2 border-b border-gray-400'>Event Type</th>
                            <th className='py-2 border-b border-gray-400'>Event Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='bg-gray-100'>
                            <td className='py-2'>{eventData.views.length}</td>
                            <td className='py-2'>{eventData.likes.length}</td>
                            <td className='py-2'>{eventData.participants.length}</td>
                            <td className='py-2'>{eventData.mode}</td>
                            <td className='py-2'>{eventData.category}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='w-10/12 space-y-6 text-base'>
                <h1 className='text-2xl font-semibold'>About this event</h1>
                <p>{eventData.description}</p>
            </div>

        </div>
    )
}

export default EventDetail