import React from "react";
import styled from "styled-components";
import Authentication from "./Authentication";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const NavBar = ()=>{
    const { user, isAuthenticated, isLoading } = useAuth0();
    const navigation = useNavigate();
    return(   
    <Wrapper>
        
        <NavLeft>
        Redes sociales
        </NavLeft>
        <NavCenter>
            <NavLink to='/'>
                <NavText>Home</NavText>
            </NavLink>
            <NavLink to='/About'>
                <NavText>About</NavText>
            </NavLink>
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
padding:40px;
`
const NavLeft = styled.div`
flex:25%;
`
const NavCenter = styled.div`
display: flex;
justify-content: space-evenly;
flex:50%;
`
const NavLink = styled(Link)`
text-decoration: none;

`
const NavRight = styled.div`
display: flex;
flex: 25%;
justify-content: space-evenly;
`
const NavText= styled.h2`
cursor:pointer;
`

export default NavBar;