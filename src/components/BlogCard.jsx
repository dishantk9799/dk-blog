import React from 'react'
import { FaRegCalendarAlt } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import Tag from '../ui/Tag';
const BlogCard = () => {
    return (
        <div className='group h-[15rem] md:h-[18rem] lg:h-[20rem] hover:border-blue-600 duration-200 flex flex-col justify-between border shadow-2xl p-4 rounded-xl backdrop-blur-lg'>

            <div className=''>
                {/* Tag */}
                <div className='flex gap-2 max-h-[45px] overflow-hidden flex-wrap'>
                    <Tag />
                </div>

                {/* Title */}
                <h1 className='mt-2 text-xl max-h-[55px] overflow-hidden font-bold flex flex-wrap group-hover:text-blue-600 duration-200'>gdrghsjyjjsthh  efsd sf sdfs sdf sdf sdf rgfrrsgsrgrgrgrgrg  fdfsdf edef sdf sf h srhrth</h1>
            </div>

            {/* Paragraph */}
            <p className='max-h-[75px] overflow-hidden flex flex-wrap text-md text-zinc-600'>Explore best practices for creating
                robust and scalable REST APIs
                using Node.js and Express.Explore best practices for creating
                robust and scalable REST APIs
                using Node.js and Express.</p>

            {/* User Name and Date */}
            <div className='flex justify-between text-zinc-600'>
                <h1 className='flex items-center gap-1'><span><FiUser size={15} /></span>qwerty</h1>
                <h1 className='flex items-center gap-1'><span><FaRegCalendarAlt size={15} /></span>January 20, 2024</h1>
            </div>
        </div>
    )
}

export default BlogCard
