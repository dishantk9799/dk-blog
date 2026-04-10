import React, { useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import { BsThreeDots } from "react-icons/bs";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { MdOutlineModeEdit, MdDeleteOutline } from "react-icons/md"
import { useBlog } from '../context/BlogContext';
import { useNavigate } from 'react-router';

const Card = ({ blog }) => {
    const { deleteBlog, togglePublish, setEditBlog } = useBlog();
    const { theme } = useTheme();
    const [menu, setMenu] = useState(false);
    const navigate = useNavigate();

    const handleDelete = (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this blog?");
        if (!confirmDelete) return;
        deleteBlog(id);
        setMenu(p => !p);
    }

    const handlePublish = (id) => {
        togglePublish(id);
        setMenu(p => !p);
    }

    const handleEdit = () => {
        setEditBlog(blog);
        setMenu(p => !p);
        navigate('/dashboard/new');

    };

    return (
        < div className='mt-5 border border-zinc-800 rounded-xl p-6 flex justify-between items-center' >

            {/* Left */}
            <div>
                <div className='flex items-center gap-2'>
                    <h1 className='font-bold'>{blog.title}</h1>
                    <span className='text-xs bg-blue-500 px-2 py-1 rounded-lg'>{blog.isPublished ? 'Published' : 'Draft'}</span>
                </div>

                <p className='text-sm text-zinc-400 mt-1'>{blog.excerpt}</p>

                <p className='text-xs text-zinc-500 mt-2'>
                    Last updated: {new Date(blog.updatedAt).toDateString()}
                </p>
            </div>

            <div className='relative'>
                {/* Right */}
                <button onClick={() => setMenu(prev => !prev)} className='text-xl p-2 rounded-lg hover:bg-blue-600 cursor-pointer duration-200'><BsThreeDots size={18} /></button>
                {/* Menu */}
                <div className={` ${menu ? 'block' : 'hidden'} text-left p-1 rounded-lg border z-5 ${theme ? 'bg-zinc-900' : 'bg-zinc-200'} top-12 right-0 absolute`}>
                    <div onClick={() => handleEdit(blog.id)} className='hover:bg-blue-600 rounded-lg cursor-pointer duration-200 px-4 py-2'>
                        <h1 className='flex items-center gap-2'><MdOutlineModeEdit size={15} /> Edit</h1>
                    </div>
                    <div onClick={() => handlePublish(blog.id)} className='hover:bg-blue-600 rounded-lg cursor-pointer duration-200 px-4 py-2'>
                        <h1 className='flex items-center gap-2'>
                            {blog.isPublished ? <IoEyeOffOutline size={15} /> : <IoEyeOutline size={15} />}
                            {blog.isPublished ? 'Unpublish' : 'Publish'}
                        </h1>
                    </div>
                    <div onClick={() => handleDelete(blog.id)} className='hover:bg-blue-600 cursor-pointer rounded-lg duration-200 px-4 py-2'>
                        <h1 className='flex items-center gap-2 text-red-500'><MdDeleteOutline size={15} /> Delete</h1>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Card
