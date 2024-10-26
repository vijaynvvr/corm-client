import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { loginHandler } from '../../store/slices/userSlice';
import api from '../../api';

const INITIAL_USER_DATA = {
    email: "",
    password: ""
}

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
	const [userData, setUserData] = useState(INITIAL_USER_DATA);
    const [isLoading, setIsLoading] = useState(false);

	const onInputChange = (e) => {
		setUserData((prevUserData) => ({
			...prevUserData,
			[e.target.name]: e.target.value,
		}));
	};

	const validateInput = () => {
		if (userData.email.length && userData.password.length) return true;
		else return false;
	};

    const handleLogin = async () => {
        try {
            if (!validateInput()) {
                toast.error('Please fill in all fields');
                return;
            }

            setIsLoading(true);

            const {data} = await api.post(`/user/signin`, userData);
    
            if (data.success) {
                toast.success(data.message);
                dispatch(loginHandler({
                    data: data.user
                }))
                navigate('/feed');
            } else {
                toast.error(data.message);
            }
        } catch (err) {
            toast.error(err.response.data.message);
        } finally {
            setIsLoading(false);
        }
    };
    


  return (
    <div className='flex flex-col flex-grow justify-center items-center'>
        <div className='w-96 border-2 p-8 rounded-lg space-y-6'>
            <div className='space-y-2 text-center'>
                <h1 className='text-2xl font-semibold'>User Login Page</h1>
                <p className='text-lg text-gray-400'>Login now to access all the functionalities</p>
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor="email">Email</label>
                <input value={userData.email} onChange={onInputChange} className='border-2 border-gray-300 px-3 py-2 rounded-lg' type="email" name="email" id="email" placeholder='Enter your email'/>
                <label htmlFor="password">Password</label>
                <input value={userData.password} onChange={onInputChange} className='border-2 border-gray-300 px-3 py-2 rounded-lg' type="password" name="password" id="password" placeholder='Enter your password'/>
            </div>
            <button
                onClick={!isLoading ? handleLogin : undefined}
                className={`w-full px-3 py-2 ${isLoading ? 'bg-slate-500 cursor-wait' : 'bg-black hover:bg-slate-900'} text-white rounded-lg`} 
            >
                Login
            </button>
            <p className='text-base text-center text-gray-500'>Don't have an account? <Link to="/register" className='ml-1 hover:text-black hover:underline'>Register Now</Link></p>
        </div>
    </div>
  )
}

export default Login;