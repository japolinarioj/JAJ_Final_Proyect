import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const SignInButton = () => {
  const { loginWithRedirect } = useAuth0();

  return(
    <Wrapper>
        <Button onClick={()=> loginWithRedirect()}>Sign in</Button>
    </Wrapper>
    )
};

const Wrapper = styled.header`

`
const Button= styled.button`
color: white;
font-family: var(--font-heading);
font-size: 15px;
text-align: center;
background-color: #167ef5;
border-radius: 20px;
cursor: pointer;
border-style: none;
padding: 10px;
`

export default SignInButton;