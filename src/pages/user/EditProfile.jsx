import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoAddCircleOutline, IoRemoveCircleOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { updateUser } from '../../store/slices/userSlice';
import api from '../../api';
import sample_logo from '../../assets/user_profile.jpg'

const EditProfile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(store => store.user.data);
    const [logoPreview, setLogoPreview] = useState({
        image: user.logo.url ? user.logo.url : sample_logo,
        edited: false
    });
    const [userData, setUserData] = useState({
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        bio: user.bio,
        logo: "",
        gender: "",
        branch: ""
    });

    const onInputChange = (e) => {
        setUserData((prevUserData) => ({
			...prevUserData,
			[e.target.name]: e.target.value,
		}));
    }

    const profileUpdateHandler = async () => {
        try {
            if (!userData.firstName.length || !userData.lastName.length) {
                toast.error("First Name and/or Last Name cannot by empty");
                return
            }
            const formData = new FormData();
            for (const key in userData) {
                if (key === "logo" && logoPreview.edited) formData.append(key, userData[key]);
                else formData.append(key, userData[key]);
            }
            const {data} = await api.put('/user/update', formData);
            console.log(data);
            if (data.success) {
                toast.success(data.message);
                dispatch(updateUser({ data: data.user }))
                navigate("/profile");
            } else {
                toast.error(data.message);
            }
        } catch (err) {
            toast.error(err);
        }
    }

    const handleLogoChange = (event) => {
		const file = event.target.files[0];
        setUserData(prevUserData => ({
            ...prevUserData,
            logo: file
        }));
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setLogoPreview({
                image: reader.result,
                edited: true
            });
        };
	};

    useEffect(() => {
		const fetchUserData = async () => {
            const { data } = await api.get(`/user/fetchDetails`);
			setUserData(prevUserData => ({
                ...prevUserData,
                gender: data.user.gender ? data.user.gender : "",
                branch: data.user.branch ? data.user.branch : "",
                logo: data.user.logo.url ? data.user.logo.url : "",
            }));
		};
		fetchUserData();
	}, []);

    return (
        <div className='p-4 flex flex-col flex-grow justify-center items-center'>
            <div className='w-10/12 sm:w-8/12 border-2 p-8 rounded-lg space-y-8'>
                <div className='relative w-32 h-32 border mx-auto aspect-square rounded-full'>
                    {logoPreview.edited ? (
                        <>
                            <img src={logoPreview.image} alt="Logo Preview" className="w-full h-full object-cover rounded-full" />
                            <button className="absolute bottom-0 right-0" onClick={() => {
                                    setLogoPreview({
                                        image: user.logo ? user.logo : sample_logo,
                                        edited: false
                                    });
                                    setUserData((prevData) => ({
                                        ...prevData,
                                        logo: user.logo ? user.logo : sample_logo,
                                    }));
                                }}
                            >
                                <IoRemoveCircleOutline className="text-red-500 text-4xl" />
                            </button>
                        </>
                    ) : (
                        <>
                            <label htmlFor="logo" className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer">
                                <IoAddCircleOutline className="text-green-500 text-4xl" />
                            </label>
                            <input id="logo" type="file" accept=".png, .jpg, .jpeg" className="hidden" onChange={handleLogoChange} />
                        </>
                    )}
                    {!logoPreview.edited && (
                        <img src={logoPreview.image} alt="Sample Image" className="w-full h-full object-cover rounded-full" />
                    )}
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="email">Email</label>
                    <input className='border-2 border-gray-300 px-3 py-2 rounded-lg' disabled type="text" name="email" id="email" placeholder='Enter you email' value={userData.email} onChange={onInputChange}/>
                    <label htmlFor="firstName">First Name</label>
                    <input className='border-2 border-gray-300 px-3 py-2 rounded-lg' type="text" name="firstName" id="firstName" placeholder='Enter your first name' value={userData.firstName} onChange={onInputChange}/>
                    <label htmlFor="lastName">Last Name</label>
                    <input className='border-2 border-gray-300 px-3 py-2 rounded-lg' type="text" name="lastName" id="lastName" placeholder='Enter your last name' value={userData.lastName} onChange={onInputChange}/>
                    <label htmlFor="bio">Bio</label>
                    <textarea className='border-2 border-gray-300 px-3 py-2 rounded-lg' name="bio" id="bio" rows="3" placeholder='Enter your bio' value={userData.bio} onChange={onInputChange}/>
                    <label htmlFor="gender">Gender</label>
                    <select className='border-2 border-gray-300 px-3 py-2 rounded-lg' name="gender" id="gender" value={userData.gender} onChange={onInputChange}>
                        <option value="" disabled hidden>Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                    <label htmlFor="branch">Branch</label>
                    <select className='border-2 border-gray-300 px-3 py-2 rounded-lg' name="branch" id="branch" value={userData.branch} onChange={onInputChange}>
                        <option value="" disabled hidden>Select your branch</option>
                        <option value="cse">CSE</option>
                        <option value="cse-ai&ml">CSE-AI&ML</option>
                        <option value="cse-iot">CSE-IOT</option>
                        <option value="it">IT</option>
                        <option value="ai&ds">AI&DS</option>
                        <option value="ece">ECE</option>
                        <option value="eee">EEE</option>
                        <option value="mech">MECH</option>
                        <option value="civil">CIVIL</option>
                        <option value="chem">CHEM</option>
                        <option value="biotech">BIOTECH</option>
                    </select>
                </div>
                <button onClick={profileUpdateHandler} className='w-full px-3 py-2 bg-black text-white hover:bg-slate-900 rounded-lg'>Update</button>
            </div>
        </div>
    )
}

export default EditProfile;