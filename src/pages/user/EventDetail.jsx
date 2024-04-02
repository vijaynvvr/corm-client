import React, { useState } from 'react'
import organization from "../../assets/HeroCard/organization.jpg";
import { FiUsers, FiMapPin, FiCalendar, FiClock } from "react-icons/fi";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { IoSaveOutline, IoSaveSharp } from "react-icons/io5";

const EventDetail = () => {
    const [like, setLike] = useState(false);
    const [register, setRegister] = useState(false);

  return (
    <div className='w-full py-4 flex flex-col gap-6 items-center'>
        <div className='w-10/12 flex flex-col md:flex-row items-center justify-center gap-8'>
            <img src={organization} alt='event-img' className='w-full md:w-5/12 h-64 rounded-lg'></img>
            <div className="w-full md:w-7/12 py-4 md:p-4 space-y-2 rounded-b-xl text-gray-600">
				<h3 className="font-bold text-3xl">Web Development Workshop</h3>
				<p className="flex items-center gap-2 text-xl hover:underline">
                    <FiUsers className='text-gray-800'/>
                    <span><span className='text-black'>by</span> Google Developer Student Club</span>
                </p>
                <span className="flex items-center gap-2">
                    <FiMapPin className='text-gray-800'/> 
                    <span><span className='text-black'>at</span> CSE Seminar Hall</span>
                </span>
                <span className="flex items-center gap-2">
                    <FiCalendar className='text-gray-800'/> 
                    <span><span className='text-black'>on</span> 12 May, 2024</span>
                </span>
                <span className="flex items-center gap-2">
                    <FiClock className='text-gray-800'/> 
                    <span><span className='text-black'>published</span> 5 mins ago</span>
                </span>
                <div className="flex gap-4 pt-2">
                    <button onClick={() => setLike(prev => !prev)} className={`w-fit px-4 flex items-center gap-3 text-lg border-2 rounded-lg border-red-500 ${like ? 'bg-red-100': 'bg-gray-100'} hover:bg-red-100`}>
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
                    <button onClick={() => setRegister(prev => !prev)} className={`w-fit px-4 flex items-center gap-3 text-lg border-2 rounded-lg border-blue-500 ${register ? 'bg-blue-100': 'bg-gray-100'} hover:bg-blue-100`}>
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
                        <th className='py-2 border-b border-gray-400'>Visits</th>
                        <th className='py-2 border-b border-gray-400'>Likes</th>
                        <th className='py-2 border-b border-gray-400'>Registrations</th>
                        <th className='py-2 border-b border-gray-400'>Event Type</th>
                        <th className='py-2 border-b border-gray-400'>Event Category</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='bg-gray-100'>
                        <td className='py-2'>10k+</td>
                        <td className='py-2'>1k+</td>
                        <td className='py-2'>128</td>
                        <td className='py-2'>Virtual</td>
                        <td className='py-2'>Speaker Session</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className='w-10/12 space-y-6 text-base'>
            <h1 className='text-2xl font-semibold'>About this event</h1>
            <p>Get started with Android Development in Kotlin. No prior experience required, open to all participants who wish to kickstart their Android Development Journey. </p>
            <p>The Google Developer Student Clubs of CBIT presents you - TECHNORAVE as a part of the Geeky Gala: A Tech Adventure! 😎</p>
            <p>🚫 BUT don't even think about joining our event! We're talking about two full days of non-stop fun and knowledge-packed experiences that will blow your mind. Seriously, who needs an entire event dedicated to leveling up their tech expertise and having an absolute blast? 🤷‍♂</p>
            <p>But hey, if you're someone who likes playing games🎲, interested in tech wizardry🧙, and loves the idea of unlocking new realms of knowledge🧠, then maybe, just maybe, you should consider taking the plunge and joining us at the Geeky Gala✨.</p>
        </div>

    </div>
  )
}

export default EventDetail