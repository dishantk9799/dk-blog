import React, { useState } from 'react'
import { IoAdd } from "react-icons/io5";
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router';
import { useBlog } from '../context/BlogContext';
import Card from '../components/Card';

const Dashboard = () => {
    const { theme } = useTheme();
    const { blog } = useBlog();
    const publishedBlog = blog.filter(b => b.isPublished);
    const notPublishedBlog = blog.filter(b => !b.isPublished);

    return (
        <div className={`w-full flex justify-center min-h-[calc(100vh-4rem)] ${theme ? 'border-zinc-200/40' : 'border-zinc-900/40'}`}>
            <div className='w-5xl h-full py-12 px-4'>

                {/* Top */}
                <div className='flex justify-between items-start'>
                    <div>
                        <h1 className='text-3xl font-extrabold md:text-5xl'>Dashboard</h1>
                        <p className='mt-2 text-xs md:text-base text-zinc-400'>
                            Manage your articles, qwerty
                        </p>
                    </div>

                    <Link to='/dashboard/new' className='flex items-center gap-2 bg-blue-500 hover:bg-blue-600 duration-200 cursor-pointer px-4 py-2 rounded-lg'>
                        <IoAdd size={18} /> New Article
                    </Link>
                </div>

                {/* Bottom */}
                <div className='w-full mt-10'>

                    {/* Stats */}
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>

                        <div className='border border-zinc-800 rounded-xl p-6'>
                            <p className='text-sm text-zinc-400'>Total Articles</p>
                            <h1 className='text-3xl font-bold mt-2'>{blog.length}</h1>
                        </div>

                        <div className='border border-zinc-800 rounded-xl p-6'>
                            <p className='text-sm text-zinc-400'>Published</p>
                            <h1 className='text-3xl font-bold mt-2 text-blue-500'>{publishedBlog.length}</h1>
                        </div>

                        <div className='border border-zinc-800 rounded-xl p-6'>
                            <p className='text-sm text-zinc-400'>Drafts</p>
                            <h1 className='text-3xl font-bold mt-2 text-zinc-400'>{notPublishedBlog.length}</h1>
                        </div>

                    </div>

                    {/* Articles */}
                    <div className='w-full mt-10'>

                        <h1 className='font-bold text-lg md:text-2xl'>Your Articles</h1>

                        {blog.map((b, i) => <Card key={i} blog={b} />)}

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Dashboard