import React from "react";
import styled from "styled-components";
import SignInButton from "./SignInButton";
import SignOutButton from "./SignOutButton";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const Authentication = () =>{
    const {isAuthenticated} = useAuth0();
    return(
        isAuthenticated
        ?
        <>
        <NavLink to='/CreatePost'>
            <h2>Create Post</h2>
        </NavLink>
        <img src="" alt="avatar"/>
        <SignOutButton/>
        </>
        :<SignInButton/>
        
    )
};

const NavLink = styled(Link)`
text-decoration: none;
`

export default Authentication;