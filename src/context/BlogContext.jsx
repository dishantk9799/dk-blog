import { createContext, useContext, useState } from "react";
import { nanoid } from 'nanoid'
export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
    const [count, setcount] = useState(34);
    const [blog, setBlog] = useState([]);
    const addBlog = (data) => {
        setBlog([...blog, { ...data, id: nanoid(), createdAt: new Date() }])
    }

    const deleteBlog = (id) => {
        setBlog(prev => prev.filter(p => p.id !== id));
    }

    return (
        <BlogContext.Provider
            value={{
                count,
                setcount
            }}
        >
            {children}
        </BlogContext.Provider>
    )
}

export const useBlog = () => useContext(BlogContext); 