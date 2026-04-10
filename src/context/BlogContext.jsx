import { createContext, useContext, useState } from "react";
import { nanoid } from 'nanoid'
export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {

    const [editBlog, setEditBlog] = useState(null);
    const [blog, setBlog] = useState(JSON.parse(localStorage.getItem('blog')) || [
        {
            id: "1",
            title: "My MERN Stack Journey",
            excerpt: "How I started learning full stack development.",
            content: "I began my journey with React and Node...",
            tags: ["mern", "journey"],
            isPublished: true,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: "2",
            title: "React Tips for Beginners",
            excerpt: "Some useful tricks to improve your React skills.",
            content: "Always break components into smaller parts...",
            tags: ["react", "tips"],
            isPublished: true,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: "3",
            title: "Frontend Interview तैयारी",
            excerpt: "How I prepared for frontend interviews.",
            content: "Focus on JS fundamentals, React, and projects...",
            tags: ["interview", "frontend"],
            isPublished: true,
            createdAt: new Date(),
            updatedAt: new Date()
        }
    ]);
    const addBlog = (data) => {
        const newBlog = [...blog, { ...data, id: nanoid(), createdAt: new Date(), updatedAt: new Date() }];
        setBlog(newBlog);
        localStorage.setItem('blog', JSON.stringify(newBlog));
    }

    const deleteBlog = (id) => {
        const deleted = blog.filter(p => p.id !== id);
        setBlog(deleted);
        localStorage.setItem('blog', JSON.stringify(deleted));
    }

    const togglePublish = (id) => {
        const updated = blog.map((b) => b.id === id ? { ...b, isPublished: !b.isPublished } : b);
        setBlog(updated);
        localStorage.setItem('blog', JSON.stringify(updated));
    };

    const updateBlog = (id, updatedData) => {
        const update = blog.map((b) => b.id === id ? { ...b, ...updatedData, updatedAt: new Date() } : b);
        setBlog(update);
        localStorage.setItem('blog', JSON.stringify(update));
    };

    return (
        <BlogContext.Provider
            value={{
                blog,
                addBlog,
                deleteBlog,
                togglePublish,
                updateBlog,
                editBlog,
                setEditBlog
            }}
        >
            {children}
        </BlogContext.Provider>
    )
}

export const useBlog = () => useContext(BlogContext); 