import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../../api";


const INITIAL_USER_DATA = {
    email: "",
    firstName: "",
    lastName: "",
    password: ""
}

const Register = () => {
    const navigate = useNavigate();
	const [userData, setUserData] = useState(INITIAL_USER_DATA);
    const [isLoading, setIsLoading] = useState(false);

	const onInputChange = (e) => {
		setUserData((prevUserData) => ({
			...prevUserData,
			[e.target.name]: e.target.value,
		}));
	};

	const validateInput = () => {
		if (
			userData.email.length &&
			userData.firstName.length &&
			userData.lastName.length &&
			userData.password.length
		) return true;
		else return false;
	};

    const handleRegister = async () => {
        try {
            if (!validateInput()) {
                toast.error('Please fill in all fields');
                return;
            }

            setIsLoading(true);
    
            const {data} = await api.post(`/user/signup`, userData);
    
            if (data.success) {
                toast.success(data.message);
                navigate('/login');
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
		<div className="flex flex-col flex-grow justify-center items-center">
			<div className="w-96 border-2 p-8 rounded-lg space-y-4">
				<div className="space-y-2 text-center">
					<h1 className="text-2xl font-semibold">
						User Register Page
					</h1>
					<p className="text-lg text-gray-400">
						Register an account with your details to get access to
						all the functionalities
					</p>
				</div>
				<div className="flex flex-col gap-2">
					<label htmlFor="email">Email</label>
					<input
						value={userData.email}
						onChange={onInputChange}
						className="border-2 border-gray-300 px-3 py-2 rounded-lg"
						type="email"
						name="email"
						id="email"
						placeholder="Enter your email"
					/>
					<label htmlFor="firstName">First Name</label>
					<input
						value={userData.firstName}
						onChange={onInputChange}
						className="border-2 border-gray-300 px-3 py-2 rounded-lg"
						type="text"
						name="firstName"
						id="firstName"
						placeholder="Enter your first name"
					/>
					<label htmlFor="lastName">Last Name</label>
					<input
						value={userData.lastName}
						onChange={onInputChange}
						className="border-2 border-gray-300 px-3 py-2 rounded-lg"
						type="text"
						name="lastName"
						id="lastName"
						placeholder="Enter your last name"
					/>
					<label htmlFor="password">Password</label>
					<input
						value={userData.password}
						onChange={onInputChange}
						className="border-2 border-gray-300 px-3 py-2 rounded-lg"
						type="password"
						name="password"
						id="password"
						placeholder="Enter your password"
					/>
				</div>
				<button
					onClick={!isLoading ? handleRegister : undefined}
                    className={`w-full px-3 py-2 ${isLoading ? 'bg-slate-500 cursor-wait' : 'bg-black hover:bg-slate-900'} text-white rounded-lg`} 
				>
					Register
				</button>
				<p className="text-base text-center text-gray-500">
					Already registered?{" "}
					<Link
						to="/login"
						className="ml-1 hover:text-black hover:underline"
					>
						Login Now
					</Link>
				</p>
			</div>
		</div>
	);
};

export default Register;
