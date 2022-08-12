import React from "react";
import { createContext, useEffect, useState } from "react";

export const CategoriesContext = createContext(null);

export const CategoriesContextProvider = ({children}) =>{
    const [categories,setCategories]= useState(null);

    useEffect(()=>{
        fetch('/api/categories')
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data.data)
            setCategories(data.data)
        })
    },[]);

    return (
        <CategoriesContext.Provider
            value={{categories,setCategories}}>
                {children}
        </CategoriesContext.Provider>
    )
};


