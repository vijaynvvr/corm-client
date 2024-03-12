import React, { useState } from 'react'
import event from "../assets/HeroCard/event.jpg"


const Profile = ({email, firstName, lastName, bio}) => {
    const [edit, setEdit] = useState(false);
  return (
    <div className='w-full flex flex-col gap-4 py-6 items-center'>
        <img src={event} alt='profile-pic' className='w-48 h-48 rounded-full shadow-xl'/>
        <div className='flex flex-col w-10/12 lg:w-4/12'>
            <label>Email:</label>
            <input className='border-2 border-black p-2' disabled type='email' value={email} />
        </div>
        <div className='flex flex-col w-10/12 lg:w-4/12'>
            <label>First name:</label>
            <input className='border-2 border-black p-2' disabled={!edit} type='text' value={firstName} />
        </div>
        <div className='flex flex-col w-10/12 lg:w-4/12'>
            <label>Last name:</label>
            <input className='border-2 border-black p-2' disabled={!edit} type='text' value={lastName} />
        </div>
        <div className='flex flex-col w-10/12 lg:w-4/12'>
            <label>Bio:</label>
            <textarea className='border-2 border-black resize-none p-2' disabled={!edit} rows={3} value={bio} />
        </div>
        <div className='flex gap-8'>
            <button onClick={() => setEdit(true)} className='px-4 py-2 bg-gray-300 hover:bg-gray-400 border-2 border-black rounded-xl'>Edit</button>
            <button onClick={() => setEdit(false)} className='px-4 py-2 bg-black text-white rounded-xl'>Save</button>
        </div>
    </div>
  )
}

export default Profile