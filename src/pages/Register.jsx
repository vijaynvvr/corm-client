import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='flex flex-col flex-grow justify-center items-center'>
        <div className='w-96 border-2 p-8 rounded-lg space-y-4'>
            <div className='space-y-2 text-center'>
                <h1 className='text-2xl font-semibold'>User Register Page</h1>
                <p className='text-lg text-gray-400'>Register an account with your details to get access to all the functionalities</p>
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor="email">Email</label>
                <input className='border-2 border-gray-300 px-3 py-2 rounded-lg' type="email" name="email" id="email" placeholder='Enter your email'/>
                <label htmlFor="firstName">First Name</label>
                <input className='border-2 border-gray-300 px-3 py-2 rounded-lg' type="text" name="firstName" id="firstName" placeholder='Enter your first name'/>
                <label htmlFor="lastName">Last Name</label>
                <input className='border-2 border-gray-300 px-3 py-2 rounded-lg' type="text" name="lastName" id="lastName" placeholder='Enter your last name'/>
                <label htmlFor="password">Password</label>
                <input className='border-2 border-gray-300 px-3 py-2 rounded-lg' type="password" name="password" id="password" placeholder='Enter your password'/>
            </div>
            <button className='w-full px-3 py-2 bg-black text-white hover:bg-slate-900 rounded-lg'>Register</button>
            <p className='text-base text-center text-gray-500'>Already registered? <Link to="/login" className='ml-1 hover:text-black hover:underline'>Login Now</Link></p>
        </div>
    </div>
  )
}

export default Register;