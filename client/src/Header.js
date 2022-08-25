import React from 'react';
import styled from 'styled-components';
import Globe from "./assets/Globe.png";

const Header = () => {
    return (
        <Wrapper>
            <Tittle>ECONTALKS</Tittle>
            <SubTittle>Comments, articles and more that will enlighten you up</SubTittle>
            <Image src={Globe}/>
        </Wrapper>
    );


}

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
const Tittle = styled.span`
margin-top:30px;
font-size: 80px;
color: #167ef5;
position:absolute;
`
const SubTittle = styled.h2`
margin-top: 135px;
color: #167ef5;
position:absolute;
`
const Image = styled.img`
width: 100%;
object-fit:contain;
height: 300px;
opacity: 0.7;
z-index: -1;

`
export default Header;