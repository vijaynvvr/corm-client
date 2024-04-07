import React from 'react'
import { Link } from 'react-router-dom';

const ProfileCard = ({logo, name}) => {
  return (
    <div className="w-fit flex flex-col items-center space-y-2 p-4 border rounded-xl">
			<img
				src={logo}
				alt="profile-img"
				className="w-48 h-48 rounded-full"
			/>
            <h3 className="font-bold">{name}</h3>
            <p>President</p>
            <Link to='/profile/1' className='text-blue-900 underline'>Know more</Link>
		</div>
  )
}

export default ProfileCard