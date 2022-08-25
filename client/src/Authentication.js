import React from "react";
import styled from "styled-components";
import SignInButton from "./SignInButton";
import SignOutButton from "./SignOutButton";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const Authentication = () =>{
    
    const {user,isAuthenticated} = useAuth0();
    
    return(
        isAuthenticated 
        ?
        <>
        
       <NavLink to='/CreatePost'>
            <h2>Create Post</h2>
        </NavLink>
        <Button>{user.nickname.charAt().toUpperCase()}</Button>
        <image src={user.picture}/>
        <SignOutButton/>
        </>
        :<SignInButton/>
        
    )
};

const NavLink = styled(Link)`
text-decoration: none;
`
const Button = styled.button`
width: 50px;
height: 50px;
border-radius: 50%;
color: white;
font-family: var(--font-heading);
font-size: 20px;
font-weight: bold;
text-align: center;
cursor: pointer;
border-style: none;
background-color: #6F00FF;
`

export default Authentication;