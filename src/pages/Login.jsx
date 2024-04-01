import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='flex flex-col flex-grow justify-center items-center'>
        <div className='w-96 border-2 p-8 rounded-lg space-y-6'>
            <div className='space-y-2 text-center'>
                <h1 className='text-2xl font-semibold'>User Login Page</h1>
                <p className='text-lg text-gray-400'>Login now to access all the functionalities</p>
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor="email">Email</label>
                <input className='border-2 border-gray-300 px-3 py-2 rounded-lg' type="email" name="email" id="email" placeholder='Enter your email'/>
                <label htmlFor="password">Password</label>
                <input className='border-2 border-gray-300 px-3 py-2 rounded-lg' type="password" name="password" id="password" placeholder='Enter your password'/>
            </div>
            <button className='w-full px-3 py-2 bg-black text-white hover:bg-slate-900 rounded-lg'>Login</button>
            <p className='text-base text-center text-gray-500'>Don't have an account? <Link to="/register" className='ml-1 hover:text-black hover:underline'>Register Now</Link></p>
        </div>
    </div>
  )
}

export default Login;