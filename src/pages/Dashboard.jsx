import React from 'react'
import { IoAdd } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import { IoEyeOutline,IoEyeOffOutline } from "react-icons/io5";
import { MdOutlineModeEdit,MdDeleteOutline } from "react-icons/md";

const Dashboard = () => {
    return (
        <div className='w-full flex justify-center min-h-[calc(100vh-4rem)] bg-zinc-950 text-white'>
            <div className='w-5xl h-full py-12 px-4'>

                {/* Top */}
                <div className='flex justify-between items-start'>
                    <div>
                        <h1 className='text-3xl font-extrabold md:text-5xl'>Dashboard</h1>
                        <p className='mt-2 text-xs md:text-base text-zinc-400'>
                            Manage your articles, qwerty
                        </p>
                    </div>

                    <button className='flex items-center gap-2 bg-blue-400 hover:bg-blue-500 duration-200 cursor-pointer px-4 py-2 rounded-lg'>
                        <IoAdd size={18} /> New Article
                    </button>
                </div>

                {/* Bottom */}
                <div className='w-full mt-10'>

                    {/* Stats */}
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>

                        <div className='border border-zinc-800 rounded-xl p-6'>
                            <p className='text-sm text-zinc-400'>Total Articles</p>
                            <h1 className='text-3xl font-bold mt-2'>1</h1>
                        </div>

                        <div className='border border-zinc-800 rounded-xl p-6'>
                            <p className='text-sm text-zinc-400'>Published</p>
                            <h1 className='text-3xl font-bold mt-2 text-blue-400'>1</h1>
                        </div>

                        <div className='border border-zinc-800 rounded-xl p-6'>
                            <p className='text-sm text-zinc-400'>Drafts</p>
                            <h1 className='text-3xl font-bold mt-2 text-zinc-400'>0</h1>
                        </div>

                    </div>

                    {/* Articles */}
                    <div className='w-full mt-10'>

                        <h1 className='font-bold text-lg md:text-2xl'>Your Articles</h1>

                        {/* Card */}
                        <div className='mt-5 border border-zinc-800 rounded-xl p-6 flex justify-between items-center'>

                            {/* Left */}
                            <div>
                                <div className='flex items-center gap-2'>
                                    <h1 className='font-bold'>nskfnfnonf</h1>
                                    <span className='text-xs bg-blue-400 px-2 py-1 rounded-lg'>Published</span>
                                </div>

                                <p className='text-sm text-zinc-400 mt-1'>fononosdncosnc</p>

                                <p className='text-xs text-zinc-500 mt-2'>
                                    Last updated: Apr 9, 2026
                                </p>
                            </div>

                            <div className='relative'>
                                {/* Right */}
                                <button className='text-xl p-2 rounded-lg hover:bg-blue-500 cursor-pointer duration-200'><BsThreeDots size={18} /></button>
                                {/* Menu */}
                                <div className='text-left p-1 rounded-lg bg-zinc-800 top-12 right-0 absolute'>
                                    <div className=' hover:bg-blue-500 rounded-lg duration-200 px-4 py-2'>
                                        <button className='flex items-center gap-2'><IoEyeOutline size={15} /> View</button>
                                    </div>
                                    <div className='hover:bg-blue-500 rounded-lg duration-200 px-4 py-2'>
                                        <button className='flex items-center gap-2'><MdOutlineModeEdit  size={15} /> Edit</button>
                                    </div>
                                    <div className='hover:bg-blue-500 rounded-lg duration-200 px-4 py-2'>
                                        <button className='flex items-center gap-2'><IoEyeOffOutline size={15} /> Publish</button>
                                    </div>
                                    <div className='hover:bg-blue-500 rounded-lg duration-200 px-4 py-2'>
                                        <button className='flex items-center gap-2 text-red-500'><MdDeleteOutline size={15} /> Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Dashboard