import { RxCross2 } from "react-icons/rx";
const FormTag = ({ tag, removeTag }) => {
    return (
        <span className='text-xs flex items-center rounded-2xl gap-1 px-2 py-1 backdrop-blur-lg shadow-2xl border text-blue-500'>{tag} <span onClick={()=>removeTag(tag)} className='p-1 rounded-full hover:bg-red-400 duration-200  cursor-pointer'><RxCross2 size={10} /></span></span>
    )
}

export default FormTag
