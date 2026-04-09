import React from 'react'
import { FaArrowLeft, FaRegCalendarAlt } from 'react-icons/fa'
import Tag from '../ui/Tag'
import { FiUser } from 'react-icons/fi'
import { IoMdTime } from "react-icons/io";
import { useTheme } from '../context/ThemeContext';

const BlogList = () => {
    const { theme } = useTheme();
    return (
        <div className={`w-full flex justify-center min-h-[calc(100vh-4rem)] ${theme ? 'border-zinc-200/40' : 'border-zinc-900/40'}`}>
            <div className='w-5xl h-full py-12 px-4'>
                {/* Back */}
                <button className='flex gap-2 text-zinc-600 hover:text-blue-500 duration-200 items-center'>
                    <FaArrowLeft />
                    Back to Articles
                </button>

                {/* Container */}
                <div className='w-full p-4 flex flex-col gap-5 rounded-xl backdrop-blur-lg mt-5'>
                    {/* Tag */}
                    <div className='flex gap-2'>
                        <Tag />
                        <Tag />
                        <Tag />
                        <Tag />
                    </div>

                    {/* Title */}
                    <h1 className='font-extrabold text-4xl'>Getting Started with React Hooks fvbfvb fsg rg rge gerge rgthrhr dhjd hdrth hhjrhjr ty erge ser gergerg aergaergaergaerg aerg aerg aergthr rstjsrtj srjtrjsrtj sj</h1>
                    {/* User Name and Date */}
                    <div className='flex gap-4 text-zinc-600'>
                        <h1 className='flex items-center gap-1'><span><FiUser size={15} /></span>qwerty</h1>
                        <h1 className='flex items-center gap-1'><span><FaRegCalendarAlt size={15} /></span>January 20, 2024</h1>
                        <h1 className='hidden md:flex items-center gap-1'><span><IoMdTime size={15} /></span>1 min read</h1>
                    </div>
                    {/* Paragraph */}
                    <p>React Hooks revolutionized the way we write React components. Introduced in React 16.8, Hooks allow you to use state and other React features without writing a class component.


                        Why Hooks?

                        Before Hooks, if you wanted to use state in a component, you had to use a class component. This led to complex lifecycle methods and hard-to-follow code.


                        The useState Hook

                        The most basic Hook is useState. It lets you add state to functional components:


                        const [count, setCount] = useState(0);

                        The useEffect Hook

                        useEffect lets you perform side effects in your components. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount combined.


                        Conclusion

                        Hooks make React code more readable, reusable, and easier to test. They represent the future of React development.</p>
                </div>
            </div>
        </div>
    )
}

export default BlogList

