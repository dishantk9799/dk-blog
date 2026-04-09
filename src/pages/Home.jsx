import React from 'react'
import BlogCard from '../components/BlogCard'
import { useBlog } from '../context/BlogContext'

const Home = () => {
  const { count } = useBlog();
  return (
    <div className='w-full flex justify-center min-h-[calc(100vh-4rem)] bg-zinc-950 text-white'>
      <div className='w-5xl h-full py-12 px-4'>

        {/* Top */}
        <div className='flex flex-col items-center'>
          <h1 className='text-3xl font-extrabold md:text-5xl'>Welcome to <span className='text-blue-500'>dk-blog</span></h1>
          <p className='max-w-70 md:max-w-xl mt-5 text-xs md:text-base text-center '>Discover thoughtful articles on technology, programming, and software engineering from passionate writers.</p>
        </div>

        {/* Bottom */}
        <div className='w-full mt-10'>
          {/* Artical Count */}
          <div className='flex justify-between'>
            <h1 className='font-bold text-lg md:text-2xl'>Latest Articles</h1>
            <h1 className=''><span>{count}</span> articles</h1>
          </div>
          {/* Cards */}
          <div className='w-full mt-5 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
