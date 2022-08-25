import React from 'react';
import styled from 'styled-components';
import Tweeter from "./assets/tweeter.png";
import Face from "./assets/face.png";
import Mail from "./assets/mail.png"


const Footer = () => {
    const year = new Date().getFullYear();

const handleClick = (e)=>{
}
    
    return (
        <Wrapper>
            <FooterLeft>
                <Connect>Connect with us :</Connect>
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
            </FooterLeft>
            <FooterCenter>{`Copyright @ Econtalks ${year}`}</FooterCenter> 
            <FooterRight>
                <ContactUs>
                    <Text>Contact us:</Text>
                    <Text>mail: econtalks@econtalks.com</Text>
                    <Text>phone: 555-555-5555</Text>
                </ContactUs>
            </FooterRight>
        </Wrapper>
    );
};
 const Wrapper = styled.div`
 font-family: var(--font-heading);
 background-color: #167ef5;
 text-align: center;
 margin-top: auto;
 padding: 50px;
 display: flex;
 align-content: space-around;
 color:white;
 `
const FooterLeft = styled.div`
display: flex;
color:white;
flex:33%;

`
const FooterCenter = styled.div`
flex:33%;
font-weight: bold;
align-items: center;
justify-items: center;
padding-top: 20px;
 `
const FooterRight = styled.div`
flex:33%;
`
const Connect =styled.h3`
color:white;
padding-top: 20px;

`
const SocialIcon = styled.img`
width: 50px;
margin:5px 30px;
border-radius: 10px;
`
const ContactUs = styled.div`
`
const Text = styled.p`
color:white;
font-size: 18px;
font-weight: bold;
padding: 5px;
`
export default Footer;