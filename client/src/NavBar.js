import React from "react";
import styled from "styled-components";
import Authentication from "./Authentication";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import Tweeter from "./assets/tweeter.png";
import Face from "./assets/face.png";
import Mail from "./assets/mail.png"


const NavBar = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    return( 
    <Wrapper>
        <NavLeft>
        <div>
            <a href='https://twitter.com/?lang=en' target='_blank' rel="noopener noreferrer">
                <SocialIcon src={Tweeter}/>
            </a>
        </div>
        <div>
            <a href='https://www.facebook.com/' target='_blank' rel="noopener noreferrer">
                <SocialIcon src={Face}/>
            </a>
        </div>
            <div>
            <a href='https://gmail.com' target='_blank' rel="noopener noreferrer">
                <SocialIcon src={Mail}/>
            </a>
        </div>
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
const SocialIcon = styled.img`
width: 50px;
margin:5px 30px;
border-radius: 10px;
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