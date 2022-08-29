import React from "react";
import { createContext, useEffect, useState } from "react";

export const UsersContext = createContext(null);

export const UsersContextProvider = ({children}) =>{
    const [users,setUsers]= useState(null);

    useEffect(()=>{
        fetch('/api/users')
        .then((res)=>res.json())
        .then((data)=>{
            setUsers(data)
        })
    },[]);

    return (
        <UsersContext.Provider
            value={{users,setUsers}}>
                {children}
        </UsersContext.Provider>
    )
};