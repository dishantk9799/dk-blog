import React from 'react'
import blog from '/blog.svg';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router';
import { useAuth } from '../context/AuthContext';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
const SignIn = () => {
  const { theme } = useTheme();
  const { registerUser, setLogginedUser } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {

  }
  const onError = () => {
    toast.error("All fields are required")
  }

  return (
    <div className={`w-full p-4 flex justify-center items-center min-h-[calc(100vh-4rem)]  ${theme ? 'bg-zinc-950 text-white' : ' bg-zinc-200 text-black'}`}>
      <form onSubmit={handleSubmit(onSubmit, onError)} className='w-xl flex flex-col items-center gap-5 h-full py-4 px-4 backdrop-blur-sm border border-zinc-800 rounded-2xl'>

        {/* Logo */}
        <div className='h-15 w-15 rounded-full p-2 border-2 border-blue-400'>
          <img src={blog} alt="logo" />
        </div>

        {/* Title */}
        <div className='text-center'>
          <h1 className='text-2xl'>Welcome Back</h1>
          <p className='text-sm text-zinc-600'>Sign in to your account to continue</p>
        </div>

        {/* Email */}
        <div className='flex w-full flex-col gap-2'>
          <label>Email</label>
          <input
            {...register('email', { required: true })}
            type="email"
            placeholder='Enter your Email...'
            className='w-full focus:border focus:border-blue-500 backdrop-blur-sm placeholder:text-blue-300 border border-zinc-800 rounded-lg p-2 outline-none'
          />
        </div>

        {/*  Password */}
        <div className='flex w-full flex-col gap-2'>
          <label>Password</label>
          <input
            {...register('password', { required: true })}
            type="password"
            placeholder='Enter Password...'
            className='w-full focus:border focus:border-blue-500 backdrop-blur-sm placeholder:text-blue-300 border border-zinc-800 rounded-lg p-2 outline-none'
          />
        </div>

        {/* Error Message */}
        <p className='px-2 w-full text-xs text-red-500 rounded-lg bg-red-400/20 p-2 border border-red-500'>Error in name</p>

        {/* Submit Button */}
        <button className='w-full bg-blue-500 hover:bg-blue-600 duration-200 p-2 rounded-lg'>
          Sign In
        </button>

        {/* Account */}
        <p className='px-2 text-sm'>Don't have an account? {' '} <Link to='/register' className='text-blue-500 cursor-pointer hover:text-blue-600 hover:underline duration-200'>Sign Up</Link></p>
      </form>
    </div>
  )
}

export default SignIn
