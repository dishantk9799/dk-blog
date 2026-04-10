import { createContext, useContext, useState } from "react";
import { nanoid } from 'nanoid'
export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
    const [count, setcount] = useState(34);
    const [blog, setBlog] = useState(JSON.parse(localStorage.getItem('blog')) || []);
    const addBlog = (data) => {
        const newBlog = [...blog, { ...data, id: nanoid(), createdAt: new Date() }];
        setBlog(newBlog);
        localStorage.setItem('blog', JSON.stringify(newBlog));
    }

    const deleteBlog = (id) => {
        setBlog(prev => prev.filter(p => p.id !== id));
    }

    return (
        <BlogContext.Provider
            value={{
                count,
                setcount,
                addBlog,
                deleteBlog
            }}
        >
            {children}
        </BlogContext.Provider>
    )
}

export const useBlog = () => useContext(BlogContext); 