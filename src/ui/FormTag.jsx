import React from 'react'
import { RxCross2 } from "react-icons/rx";
const FormTag = () => {
    return (
        <span className='text-xs flex items-center rounded-lg gap-1 px-2 py-1 bg-zinc-700'>react <span className='p-1 rounded-full hover:bg-zinc-500 duration-200  cursor-pointer'><RxCross2 size={10} /></span></span>
    )
}

export default FormTag
