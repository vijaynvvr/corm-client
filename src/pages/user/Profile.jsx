import React, { useState } from 'react'
import event from "../../assets/HeroCard/event.jpg"
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { updateUser } from '../../store/slices/userSlice';
import api from '../../api';

const Profile = () => {
    const [edit, setEdit] = useState(false);
    const dispatch = useDispatch();
    const user = useSelector(store => store.user.data);
    const [userData, setUserData] = useState({
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        bio: user.bio
    });

    const validateInput = () => {
		if (userData.firstName.length && userData.lastName.length) return true;
		else return false;
	};

    const onInputChange = (e) => {
        setUserData((prevUserData) => ({
			...prevUserData,
			[e.target.name]: e.target.value,
		}));
    }

    const profileUpdateHandler = async () => {
        try {
            if (!validateInput()) {
                toast.error("First Name and/or Last Name cannot by empty");
                return
            }
            const {data} = await api.put(`/user/update/${user.id}`, userData);
            if (data.success) {
                toast.success(data.message);
                dispatch(updateUser({ data: data.user }))
                setEdit(false);
            } else {
                toast.error(data.message);
            }
        } catch (err) {
            toast.error(err);
        }
    }

  return (
    <div className='w-full flex flex-col gap-4 py-6 items-center'>
        <img src={event} alt='profile-pic' className='w-48 h-48 rounded-full shadow-xl'/>
        <div className='flex flex-col w-10/12 lg:w-4/12'>
            <label>Email:</label>
            <input className='border-2 border-black p-2' disabled type='email' name='email' value={userData.email} />
        </div>
        <div className='flex flex-col w-10/12 lg:w-4/12'>
            <label>First name:</label>
            <input className='border-2 border-black p-2' disabled={!edit} type='text' name='firstName' value={userData.firstName} onChange={onInputChange} />
        </div>
        <div className='flex flex-col w-10/12 lg:w-4/12'>
            <label>Last name:</label>
            <input className='border-2 border-black p-2' disabled={!edit} type='text' name='lastName' value={userData.lastName} onChange={onInputChange} />
        </div>
        <div className='flex flex-col w-10/12 lg:w-4/12'>
            <label>Bio:</label>
            <textarea className='border-2 border-black resize-none p-2' disabled={!edit} rows={3} name='bio' value={userData.bio} onChange={onInputChange} />
        </div>
        <div className='flex gap-8'>
            <button onClick={() => setEdit(true)} className='px-4 py-2 bg-gray-100 hover:bg-gray-200 border-2 border-black rounded-xl'>Edit</button>
            <button onClick={profileUpdateHandler} className='px-4 py-2 bg-gray-800 hover:bg-black text-white rounded-xl'>Save</button>
        </div>
    </div>
  )
}

export default Profile