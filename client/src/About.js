import React from 'react';
import styled from 'styled-components';
import SharingIdeas from './assets/SharingIdeas.jpg'

const About= () => {
    return (
        <Wrapper>
            <ImageWrapper>
                <Image src={SharingIdeas}/>
            </ImageWrapper>
            <AboutWrapper>
                <h2>Why an ECONOMICS blog is good?</h2>
                <AboutText>
                    <p><strong>Why wouldn't it be?</strong></p>
                    <p>If you want to read commentaries on economic policies, 
                        find out what people are currently researching, 
                        or simply keep up-to-date with the latest economic happenings across the world, then
                        <strong> this is the blog for you!</strong>
                    </p>
                    <p>Reading economics blogs can be an easy way to get your fill of knowledge and, 
                        in many cases, they're more digestable than academic journals, or research papers
                        which can be dense and grueling.</p>
                    <p><strong>So here we go! Let's start sharing knowledge and enlighten ourselves up!</strong></p>
               
                </AboutText>
            </AboutWrapper>
            
        </Wrapper>
    );
}

const Wrapper = styled.div`
display: flex;
`
const ImageWrapper = styled.div`
flex:50%;
`
const AboutWrapper = styled.div`
flex:50%;
margin:200px 100px 20px 50px;
`
const Image = styled.img`
width: 100%;
margin:auto;
`
const AboutText = styled.div`
position: relative;
padding:20px 80px;
line-height: 35px;

`
export default About;