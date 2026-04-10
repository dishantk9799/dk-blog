import { createContext, useContext, useState } from "react";
import { nanoid } from 'nanoid'
export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
    const [count, setcount] = useState(34);
    const [isPublished, setIsPublished] = useState(false);
    const [blog, setBlog] = useState(JSON.parse(localStorage.getItem('blog')) || []);
    const addBlog = (data) => {
        const newBlog = [...blog, { ...data, isPublished, id: nanoid(), createdAt: new Date(), updatedAt: new Date() }];
        setBlog(newBlog);
        localStorage.setItem('blog', JSON.stringify(newBlog));
    }

    const deleteBlog = (id) => {
        setBlog(prev => prev.filter(p => p.id !== id));
    }

    return (
        <BlogContext.Provider
            value={{
                blog,
                addBlog,
                deleteBlog,
                setIsPublished,
                isPublished
            }}
        >
            {children}
        </BlogContext.Provider>
    )
}

export const useBlog = () => useContext(BlogContext); 