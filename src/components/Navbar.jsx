import { useState } from 'react';
import blog from '/blog.svg';
import { FiSun, FiMoon } from "react-icons/fi";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoLogOutOutline } from "react-icons/io5";
import { useTheme } from '../context/ThemeContext';
import { Link, useNavigate } from 'react-router';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-toastify';
const Navbar = () => {
    const { theme, setTheme } = useTheme();
    const { logginedUser, LogoutUser } = useAuth();
    const [menu, setMenu] = useState(false);
    const navigate = useNavigate();

    const logout = () => {
        LogoutUser();
        toast.info('Logout successfully')
    }

    return (
        <div className={`w-full sticky top-0 z-50 h-[4rem]  backdrop-blur-sm border-b ${theme ? 'border-zinc-200/40' : 'border-zinc-900/40'} flex justify-center`}>
            <div className={`w-5xl ${theme ? 'text-white' : 'text-black'} h-full p-4 flex justify-between items-center`}>

                {/* Left */}
                <div className='font-extrabold text-lg'>
                    <Link to='/' className='flex cursor-pointer items-center'><img style={{ height: "30px" }} src={blog} alt="logo" />dk-blog</Link>
                </div>

                {/* Right */}
                <div className='flex gap-2'>
                    {/* Theme */}
                    <button onClick={() => setTheme(prev => !prev)} className='p-3 cursor-pointer hover:bg-blue-600 duration-200 rounded-lg'>
                        {theme ? <FiSun size={18} /> : <FiMoon size={18} />}
                    </button>

                    {logginedUser ? (
                        <>
                            {/* User Name */}
                            <div className='relative flex'>
                                <button onClick={() => setMenu(prev => !prev)} className='hover:bg-blue-600 cursor-pointer duration-200 rounded-lg px-4 gap-1.5 flex items-center'>
                                    <div className='h-8 w-8 flex items-center justify-center bg-blue-500 rounded-full p-2 text-sm'>{logginedUser.name[0].toUpperCase()}</div>
                                    <span className='hidden sm:block'>{logginedUser.name}</span>
                                </button>
                                {/* Menu */}
                                <div className={`${menu ? 'block' : 'hidden'} text-left overflow-hidden rounded-lg border ${theme ? 'bg-zinc-900' : 'bg-zinc-200'} top-12 right-0 absolute`}>
                                    <div className='border-b px-4 py-2'>
                                        <h1>{logginedUser.name}</h1>
                                        <p className='text-xs text-zinc-600'>{logginedUser.email}</p>
                                    </div>
                                    <div onClick={() => {navigate('/dashboard'); setMenu(false); }} className='border-b px-4 py-2 cursor-pointer hover:bg-blue-600 duration-200'>
                                        <h1 className='flex items-center gap-1'><LuLayoutDashboard size={15} /> Dashbaord</h1>
                                    </div>
                                    <div onClick={logout} className='px-4 py-2 cursor-pointer hover:bg-blue-600 duration-200'>
                                        <h1 className='flex items-center gap-1'><IoLogOutOutline size={15} /> <span className='text-red-500'>Logout</span></h1>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            {/* Login */}
                            <Link Link to='/login' className='px-4 py-2 cursor-pointer hover:bg-blue-600 duration-200 rounded-lg'>
                                Login
                            </Link>

                            {/* Signup */}
                            <Link to='/register' className='px-4 py-2 cursor-pointer bg-blue-500 hover:bg-blue-600 duration-200 rounded-lg'>
                                Signup
                            </Link>
                        </>
                    )}
                </div>

            </div>
        </div >
    )
}

export default Navbar
