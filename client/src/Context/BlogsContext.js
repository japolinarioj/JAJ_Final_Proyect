import React from "react";
import { createContext, useEffect, useState } from "react";

export const BlogsContext = createContext(null);

export const BlogsContextProvider = ({children}) =>{
    const [blogs,setBlogs]= useState(null);

    useEffect(()=>{
        fetch('/api/get-blogs')
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data.data)
            setBlogs(data.data)
        })
    },[]);

    return (
        <BlogsContext.Provider
            value={{blogs,setBlogs}}>
                {children}
        </BlogsContext.Provider>
    )
};
