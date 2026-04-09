import React, { useState } from 'react'
import blog from '/blog.svg';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import { useTheme } from '../context/ThemeContext';
import { Link, useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-toastify';
const SignUp = () => {
    const [showPass, setShowPass] = useState(false);
    const [invalid, setInvalid] = useState(false);
    const navigate = useNavigate();
    const { theme } = useTheme();
    const { registerUser, AddRegisterUser } = useAuth();
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        const userExists = registerUser.some(u => u.email === data.email);
        if (userExists) {
            setInvalid(true);
            return;
        }
        if (data.password.length < 6) {
            setInvalid(false);
            return toast.error("Password is too weak")
        }
        if (data.password !== data.confirmPassword) {
            setInvalid(false);
            return toast.error("Passwords do not match");
        }
        setInvalid(false);
        AddRegisterUser(data);
        toast.success("Account Created Successfully");
        reset();
        navigate('/login');
    }
    const onError = () => {
        toast.error("All fields are required")
    }

    return (
        <div className={`w-full p-4 flex justify-center min-h-[calc(100vh-4rem)] ${theme ? 'bg-zinc-950 text-white' : ' bg-zinc-200 text-black'}`}>
            <form onSubmit={handleSubmit(onSubmit, onError)} className='w-xl flex flex-col items-center mt-10 mb-10 gap-5 h-full py-4 px-4 backdrop-blur-sm border border-zinc-800 rounded-2xl'>
                {/* Logo */}
                <div className='h-15 w-15 rounded-full p-2 border-2 border-blue-400'>
                    <img src={blog} alt="logo" />
                </div>

                {/* Title */}
                <div className='text-center'>
                    <h1 className='text-2xl'>Create an Account</h1>
                    <p className='text-sm text-zinc-600'>Join Inkwell to start reading or writing</p>
                </div>

                {/* Name */}
                <div className='flex w-full flex-col gap-2'>
                    <label>Name</label>
                    <input
                        {...register('name', { required: true })}
                        type="text"
                        placeholder='Enter your name...'
                        className='w-full focus:border focus:border-blue-500 backdrop-blur-sm border placeholder:text-blue-300 border-zinc-800 rounded-lg p-2 outline-none'
                    />
                </div>
                {/* Email */}
                <div className='flex w-full flex-col gap-2'>
                    <label>Email</label>
                    <input
                        {...register('email', { required: true })}
                        type="email"
                        placeholder='Enter your Email...'
                        className='w-full focus:border focus:border-blue-500 backdrop-blur-sm border placeholder:text-blue-300 border-zinc-800 rounded-lg p-2 outline-none'
                    />
                </div>
                {/* Password */}
                <div className='flex w-full flex-col gap-2'>
                    <label>Password</label>
                    <div className='flex items-center gap-3 backdrop-blur-sm border focus-within:border-blue-500 border-zinc-800  rounded-lg p-2'>
                        <input
                            {...register('password', { required: true })}
                            type={showPass ? 'text' : 'password'}
                            placeholder="Enter Password..."
                            className="flex-1 outline-none placeholder:text-blue-300" />
                        <button
                            type="button"
                            onClick={() => setShowPass(prev => !prev)}
                            className="text-zinc-600 hover:text-blue-400 transition-colors">
                            {showPass ? <IoEyeOutline size={20} /> : <IoEyeOffOutline size={20} />}
                        </button>
                    </div>
                </div>

                {/* Comfirm Password */}
                <div className='flex w-full flex-col gap-2'>
                    <label>Comfirm Password</label>
                    <input
                        {...register('confirmPassword', { required: true })}
                        type="password"
                        placeholder='Enter Comfirm Password...'
                        className='w-full focus:border focus:border-blue-500 backdrop-blur-sm placeholder:text-blue-300 border border-zinc-800 rounded-lg p-2 outline-none'
                    />
                </div>

                {/* Error Message */}
                {invalid && (<p className='px-2 w-full text-xs text-red-500 rounded-lg bg-red-400/20 p-2 border border-red-500'>User all ready exists</p>)}

                {/* Submit Button */}
                <button className='w-full bg-blue-500 hover:bg-blue-600 duration-200 p-2 rounded-lg'>
                    Create Account
                </button>

                {/* Account */}
                <p className='px-2 text-sm'>Already have an account? {' '} <Link to='/login' className='text-blue-500 cursor-pointer hover:text-blue-600 hover:underline duration-200'>Sign in</Link></p>
            </form>
        </div>
    )
}

export default SignUp
