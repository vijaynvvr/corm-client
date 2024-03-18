import React from 'react'
import organization from "../assets/HeroCard/organization.jpg";
import EventCard from '../components/EventCard';
import ProfileCard from '../components/ProfileCard';


const OrgDetail = () => {
  return (
    <div className='w-full py-4 flex flex-col gap-8 items-center'>
        <div className='w-10/12 flex flex-col-reverse md:flex-row gap-8'>
            <div className="w-full md:w-7/12 py-4 space-y-2 rounded-b-xl">
                <h3 className="font-bold text-2xl md:text-3xl">Google Developer Student Club</h3>
                <p className='text-base md:text-lg'>Google Developer Student Clubs are university based community groups for students interested in Google developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome. By joining a GDSC, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community.</p>
			</div>
            <img src={organization} alt='event-img' className='w-full md:w-5/12 h-64 rounded-lg'></img>
        </div>
        <div className='text-center space-x-4'>
            <button className='bg-blue-500 text-white px-4 py-2 rounded-lg border-2  hover:bg-blue-600'>Follow</button>
            <button className='bg-gray-500 text-white px-4 py-2 rounded-lg border-2  hover:bg-gray-600'>Contact</button>
        </div>
        <div className='w-10/12 space-y-2 text-base'>
            <h1 className='text-2xl font-semibold'>Organization Info</h1>
            <table className='w-full border border-gray-400 text-center'>
                <thead>
                    <tr className='bg-gray-200'>
                        <th className='py-2 border-b border-gray-400'>Members</th>
                        <th className='py-2 border-b border-gray-400'>Events</th>
                        <th className='py-2 border-b border-gray-400'>Organization Type</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='bg-gray-100'>
                        <td className='py-2'>1k+</td>
                        <td className='py-2'>12</td>
                        <td className='py-2'>Technical</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className='space-y-4 w-10/12'>
            <h1 className='text-2xl font-semibold'>Upcoming Events</h1>
            <div className="flex flex-wrap gap-4">
				<EventCard
                    id={2}
					img={organization}
					title="Web Development Workshop"
					organization="Google Developer Student Club"
                    date="12 May, 2024"
                    time="5 mins ago"
				/>
			</div>
        </div>
        <div className='space-y-4 w-10/12'>
            <h1 className='text-2xl font-semibold'>Previous Events</h1>
            <div className="flex flex-wrap gap-4">
				<EventCard
                    id={2}
					img={organization}
					title="Web Development Workshop"
					organization="Google Developer Student Club"
                    date="12 May, 2024"
                    time="5 mins ago"
				/>
				<EventCard
                    id={2}
					img={organization}
					title="Web Development Workshop"
					organization="Google Developer Student Club"
                    date="12 May, 2024"
                    time="5 mins ago"
				/>
				<EventCard
                    id={2}
					img={organization}
					title="Web Development Workshop"
					organization="Google Developer Student Club"
                    date="12 May, 2024"
                    time="5 mins ago"
				/>
			</div>
        </div>
        <div className='space-y-4 w-10/12'>
            <h1 className='text-2xl font-semibold'>Organizers</h1>
            <div className="flex flex-wrap gap-4">
                <ProfileCard />
                <ProfileCard />
                <ProfileCard />
                <ProfileCard />
            </div>
        </div>
    </div>
  )
}

export default OrgDetail