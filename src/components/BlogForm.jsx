import { FaArrowLeft } from "react-icons/fa6";
import FormTag from '../ui/FormTag';
import { useTheme } from "../context/ThemeContext";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useBlog } from "../context/BlogContext";

const BlogForm = () => {
    const [tags, setTags] = useState([]);
    const [input, setInput] = useState('');
    const [erro, setErro] = useState('');
    const { theme } = useTheme();
    const { addBlog, editBlog, setEditBlog, updateBlog } = useBlog();
    const navigate = useNavigate();
    const { register, handleSubmit, setValue, reset } = useForm({ defaultValues: editBlog || {} });

    const handleEnter = (e) => {
        if (e.key === 'Enter' && input.trim() !== '') {
            e.preventDefault();
            if (tags.length >= 5) {
                return toast.error("Max 5 tags allowed");
            }
            if (tags.includes(input.trim())) {
                return toast.error("Tag already exists");
            }
            const updatedTags = [...tags, input.trim()];
            setTags(updatedTags);
            setValue('tags', updatedTags);
            setInput('');
        }
    }
    const removeTag = (t) => {
        const updatedTags = tags.filter(tag => tag !== t);
        setTags(updatedTags);
        setValue('tags', updatedTags);
    };

    useEffect(() => {
        if (editBlog) {
            reset(editBlog);
            setTags(editBlog.tags || []);
        }
    }, [editBlog]);

    const onSubmit = (data) => {
        if (editBlog) {
            updateBlog(editBlog.id, data);
            setEditBlog(null);
            toast.success("Blog updated successfully");
        } else {
            addBlog(data);
            toast.success('Blog created successfully');
        }
        setTags([]);
        navigate('/dashboard');
    }

    const onError = () => {
        setErro('Fields are required');
    }

    return (

        <div className={`w-full min-h-[calc(100vh-4rem)] flex justify-center  ${theme ? 'border-zinc-200/40' : 'border-zinc-900/40'}`}>
            <div className={`w-5xl py-12 px-4`}>

                {/* Back */}
                <button onClick={() => navigate(-1)} className='flex gap-2 text-zinc-600 hover:text-blue-500 duration-200 items-center'>
                    <FaArrowLeft />
                    Back to Dashboard
                </button>

                {/* Container */}
                <form onSubmit={handleSubmit(onSubmit, onError)} className='w-full p-4 flex flex-col gap-5 rounded-xl border backdrop-blur-lg shadow-2xl mt-5'>

                    {/* Title */}
                    <h1 className='text-3xl'>Create New Article</h1>


                    {/* Inputs */}
                    <div className='flex flex-col gap-2'>

                        {/* Title */}
                        <label>Title</label>
                        <input
                            {...register('title', { required: true })}
                            type="text"
                            placeholder='Enter a compelling title...'
                            className='w-full focus:border-blue-500 backdrop-blur-sm placeholder:text-blue-300 border border-zinc-800 rounded-lg p-2 outline-none'
                        />
                    </div>

                    {/* Excerpt */}
                    <div className='flex flex-col gap-2'>
                        <label>Excerpt</label>
                        <textarea
                            {...register('excerpt', { required: true })}
                            placeholder='Write a brief summary of your article...'
                            className='w-full focus:border-blue-500 backdrop-blur-sm placeholder:text-blue-300 border border-zinc-800 rounded-lg p-2 outline-none'
                        />
                        <p className='text-xs text-zinc-600'>A short description that appears on the blog listing</p>
                    </div>

                    {/* Content */}
                    <div className='flex flex-col gap-2'>
                        <label>Content</label>
                        <textarea
                            {...register('content', { required: true })}
                            placeholder='Write your article content here... (Markdown supported)'
                            className='w-full focus:border-blue-500 backdrop-blur-sm placeholder:text-blue-300 border border-zinc-800 rounded-lg p-2 outline-none'
                        />
                        <p className='text-xs text-zinc-600'>Supports Markdown: ## for headers, **bold**, *italic*, `code`, etc.</p>
                    </div>

                    {/* Tages */}
                    <div className='flex flex-col gap-2'>
                        <label>Tages</label>
                        <div className='flex gap-2'>
                            {tags.map((t, i) => <FormTag key={i} removeTag={removeTag} tag={t} />)}
                        </div>
                        <input type="hidden" {...register('tags')} />
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleEnter}
                            placeholder='Add tags (press Enter to add)'
                            className='w-full focus:border-blue-500 backdrop-blur-sm placeholder:text-blue-300 border border-zinc-800 rounded-lg p-2 outline-none'
                        />
                        <p className='text-xs text-zinc-600'>Add up to 5 tags to help readers find your article</p>
                    </div>
                    {/* Error Message */}
                    {erro && (<p className='px-2 w-full text-xs text-red-500 rounded-lg bg-red-400/20 p-2 border border-red-500'>{erro}</p>)}

                    {/* Buttons */}
                    <div className='flex justify-end gap-3 mt-5'>
                        <button onClick={() => setValue('isPublished', false)} className='px-4 py-2 rounded-lg border hover:bg-blue-600 duration-200 border-zinc-700'>
                            Save as Draft
                        </button>
                        <button onClick={() => setValue('isPublished', true)} className='px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 duration-200'>
                            Publish
                        </button>
                    </div>

                </form>

            </div>
        </div>
    )
}

export default BlogForm