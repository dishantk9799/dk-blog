import React from 'react'
import { FaArrowLeft, FaRegCalendarAlt } from 'react-icons/fa'
import Tag from '../ui/Tag'
import { FiUser } from 'react-icons/fi'
import { IoMdTime } from "react-icons/io";
import { useTheme } from '../context/ThemeContext';
import { useNavigate, useParams } from 'react-router';
import { useBlog } from '../context/BlogContext';
import { useAuth } from '../context/AuthContext';
import Markdown from 'react-markdown'

const BlogList = () => {
    const { id } = useParams();
    const { theme } = useTheme();
    const navigate = useNavigate();
    const { blog } = useBlog();
    const { logginedUser } = useAuth();
    const BlogData = blog.find((b) => b.id === id);

    return (
        <div className={`w-full flex justify-center min-h-[calc(100vh-4rem)] ${theme ? 'border-zinc-200/40' : 'border-zinc-900/40'}`}>
            <div className='w-5xl h-full py-12 px-4'>
                {/* Back */}
                <button onClick={() => navigate(-1)} className='flex gap-2 text-zinc-600 hover:text-blue-500 duration-200 items-center'>
                    <FaArrowLeft />
                    Back to Articles
                </button>

                {/* Container */}
                <div className='w-full p-4 flex flex-col gap-5 rounded-xl backdrop-blur-lg mt-5'>
                    {/* Tag */}
                    <div className='flex gap-2'>
                        {(BlogData.tags || []).map((t, i) => (
                            <Tag key={i} tag={t} />
                        ))}
                    </div>

                    {/* Title */}
                    <h1 className='font-extrabold text-4xl'>{BlogData.title}</h1>
                    {/* User Name and Date */}
                    <div className='flex gap-4 text-zinc-600'>
                        <h1 className='flex items-center gap-1'><span><FiUser size={15} /></span>{logginedUser.name}</h1>
                        <h1 className='flex items-center gap-1'><span><FaRegCalendarAlt size={15} /></span>{new Date(BlogData.createdAt).toDateString()}</h1>
                        <h1 className='hidden md:flex items-center gap-1'><span><IoMdTime size={15} /></span>1 min read</h1>
                    </div>

                    {/* Paragraph */}
                    <Markdown>
                        {BlogData.content}
                    </Markdown>
                </div>
            </div>
        </div>
    )
}

export default BlogList

