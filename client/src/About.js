import React from 'react';
import styled from 'styled-components';

const About= () => {
    return (
        <Wrapper>
            <Image src={require("./assets/sharing ideas.jpg")}/>
            <h1>About</h1>
        </Wrapper>
    );
}

const Wrapper = styled.div`
`
const Image = styled.img`
`
export default About;