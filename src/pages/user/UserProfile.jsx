import React, { useEffect, useState } from 'react'
import OrgProfileCard from '../../components/OrgProfileCard';
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import api from '../../api';
import sample_logo from '../../assets/user_profile.jpg'

const UserProfile = () => {
    const user = useSelector(store => store.user.data);
    const [orgList, setOrgList] = useState([]);

    const fetchOrgList = async () => {
        const { data } = await api.get(`/organization/getFollowedOrgs`);
        setOrgList(data.orgs);
    };

	useEffect(() => {
		fetchOrgList();
	}, []);

    return (
        <div className='w-full md:w-10/12 mx-auto space-y-6 p-4'>
            <div className='flex flex-col gap-4 items-center justify-center'>
                <img className='w-72 aspect-square rounded-full' src={user.logo ? user.logo : sample_logo} alt="demo-img" />
                <div className='space-y-4 text-center'>
                    <div className='space-y-1'>
                        <h1 className='text-3xl font-medium'>{user.firstName}</h1>
                        <p className='text-gray-500'>@{user.email.split('@')[0]}</p>
                    </div>
                    <div className='space-y-1'>
                        <p className='font-medium'>Bio</p>
                        {user.bio ? (
                            <p className='text-gray-500'>{user.bio}</p>
                        ) : (
                            <p className='text-gray-500 md:text-center'>No bio yet</p>
                        )}
                    </div>
                </div>
            </div>
            <div>
                <Link to='/profile/edit' className='mx-auto w-fit flex items-center gap-2 px-2 py-1 bg-slate-950 text-white hover:bg-slate-800 rounded-md cursor-pointer border-2 border-slate-900'>
                    <FiEdit />
                    <span>Edit Profile</span>
                </Link>
            </div>
            <ul className='p-4 flex flex-col md:flex-row gap-6 md:gap-12 justify-center'>
                <li>
                    <p className='font-medium'>Gender</p>
                    {user.gender ? (
                        <p className='text-gray-500'>{user.gender}</p>
                    ) : (
                        <p className='text-gray-500 md:text-center'>Not filled</p>
                    )}
                </li>
                <li>
                    <p className='font-medium'>Branch</p>
                    {user.branch ? (
                        <p className='text-gray-500'>{user.branch}</p>
                    ) : (
                        <p className='text-gray-500 md:text-center'>Not filled</p>
                    )}
                </li>
                <li>
                    <p className='font-medium'>Skills</p>
                    {user.skills.length ? (
                        <p className='text-gray-500'>{user.skills.join(" ")}</p>
                    ) : (
                        <p className='text-gray-500 md:text-center'>Not filled</p>
                    )}
                </li>
            </ul>

            <div className='space-y-2'>
                <h2 className='font-medium'>Following Organizations:</h2>
                <div>
                    {!orgList.length ? (
                        <p className='text-lg text-gray-500'>You aren't following any <Link to='/organizations' className='text-gray-800 hover:text-black hover:underline'>organizations</Link> yet. Follow to get notified about the activities of organizations and get personalized event recommendations in your feed.</p>
                    ) : (
                        orgList.map(org => (
                            <OrgProfileCard
                                key={org._id}
                                id={org._id}
                                path={org.logo}
                                orgName={org.name}
                                about={org.about}
                                fetchOrgList={fetchOrgList}
                            />
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}

export default UserProfile;