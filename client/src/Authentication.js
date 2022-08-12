import React from "react";
import SignInButton from "./SignInButton";
import SignOutButton from "./SignOutButton";
import { useAuth0 } from "@auth0/auth0-react";

const Authentication = () =>{
    const {isAuthenticated} = useAuth0();
    return(
        isAuthenticated
        ?
        <>
        <img src="" alt="avatar"/>
        <SignOutButton/>
        </>
        :<SignInButton/>
        
    )
}

export default Authentication;