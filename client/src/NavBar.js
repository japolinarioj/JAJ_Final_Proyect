import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Authentication from "./Authentication";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {brands, solid} from "@fortawesome/fontawesome-svg-core/import.macro";

const NavBar = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    return( 
    <Wrapper>
        <NavLeft>
            <Icon><FontAwesomeIcon icon={solid('blog')} style={{width:"30px"}}/></Icon>
            <Icon><FontAwesomeIcon icon={solid('cubes-stacked')} style={{width:"30px"}}/></Icon>
            <Icon><FontAwesomeIcon icon={solid('shield-halved')} style={{width:"30px"}}/></Icon>

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
display: flex;
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
const Icon = styled.div`
margin:5px 30px;
`
export default NavBar;