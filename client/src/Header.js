import React from 'react';
import styled from 'styled-components';


const Header = () => {
    return (
        <Wrapper>
            <Tittle>ECONBLOGS</Tittle>
            <Image src={require("./assets/Globe.png")}/>
        </Wrapper>
    );


}

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
const Tittle = styled.span`
margin-top: 100px;
font-size: 80px;
color: #167ef5;
position:absolute;
`
const Image = styled.img`
width: 100%;
object-fit:contain;
height: 300px;

`
export default Header;