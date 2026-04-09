import { FaArrowLeft } from "react-icons/fa6";
import FormTag from '../ui/FormTag';

const BlogForm = () => {
    return (
        <div className='w-full flex justify-center min-h-[calc(100vh-4rem)] bg-zinc-950 text-white'>
            <div className='w-5xl h-full py-12 px-4'>

                {/* Back */}
                <button className='flex gap-2 text-zinc-600 hover:text-zinc-200 duration-200 items-center'>
                    <FaArrowLeft />
                    Back to Dashboard
                </button>

                {/* Container */}
                <div className='w-full p-4 flex flex-col gap-5 rounded-xl border border-zinc-600 bg-zinc-950/80 mt-5'>

                    {/* Title */}
                    <h1>Create New Article</h1>


                    {/* Inputs */}
                    <div className='flex flex-col gap-2'>

                        {/* Title */}
                        <label>Title</label>
                        <input
                            type="text"
                            placeholder='Enter a compelling title...'
                            className='w-full focus:border focus:border-blue-500 bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 outline-none'
                        />
                    </div>

                    {/* Excerpt */}
                    <div className='flex flex-col gap-2'>
                        <label>Excerpt</label>
                        <textarea
                            placeholder='Write a brief summary of your article...'
                            className='w-full focus:border focus:border-blue-500 bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 outline-none '
                        />
                        <p className='text-xs text-zinc-400'>A short description that appears on the blog listing</p>
                    </div>

                    {/* Content */}
                    <div className='flex flex-col gap-2'>
                        <label>Content</label>
                        <textarea
                            placeholder='Write your article content here... (Markdown supported)'
                            className='w-full focus:border focus:border-blue-500 bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 outline-none '
                        />
                        <p className='text-xs text-zinc-400'>Supports Markdown: ## for headers, **bold**, *italic*, `code`, etc.</p>
                    </div>

                    {/* Tages */}
                    <div className='flex flex-col gap-2'>
                        <label>Tages</label>
                        <div className='flex gap-2'>
                            <FormTag />
                            <FormTag />
                            <FormTag />
                            <FormTag />
                        </div>
                        <input
                            type="text"
                            placeholder='Add tags (press Enter to add)'
                            className='w-full focus:border focus:border-blue-500 bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 outline-none'
                        />
                        <p className='text-xs text-zinc-400'>Add up to 5 tags to help readers find your article</p>
                    </div>

                    {/* Buttons */}
                    <div className='flex justify-end gap-3 mt-5'>
                        <button className='px-4 py-2 rounded-lg border hover:bg-blue-500 duration-200 border-zinc-700'>
                            Save as Draft
                        </button>
                        <button className='px-4 py-2 rounded-lg bg-blue-400 hover:bg-blue-500 duration-200'>
                            Publish
                        </button>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default BlogForm