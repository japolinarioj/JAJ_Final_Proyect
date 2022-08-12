import React from "react";
import styled from "styled-components";
import Authentication from "./Authentication";
import { useAuth0 } from "@auth0/auth0-react";

const NavBar = ()=>{
    const { user, isAuthenticated, isLoading } = useAuth0();
    console.log(isAuthenticated)
    console.log(user)
    console.log(isLoading)

    return(   
    <Wrapper>
        
        <NavLeft>
        Redes sociales
        </NavLeft>
        <NavCenter>
            <h3>About</h3>
            <h3>Home</h3>
            <h3>Create Post</h3>
        </NavCenter>
        <NavRight>
            <Authentication/>
        </NavRight>

    </Wrapper>
    )
};

const Wrapper = styled.header`
width: 100%;
height: 50px;
position: sticky;
display: flex;
align-content: space-around;
padding:20px
`
const NavLeft = styled.div`
flex:25%;
`
const NavCenter = styled.div`
display: flex;
justify-content: space-evenly;
flex:50%;
`
const NavRight = styled.div`
display: flex;
flex: 25%;
justify-content: space-evenly;
`

export default NavBar;