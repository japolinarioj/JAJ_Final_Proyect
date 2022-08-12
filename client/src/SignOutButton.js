import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const SignOutButton = () => {
  const { logout } = useAuth0();

  return(
    <Wrapper>
        <Button onClick={()=> logout( { returnTo: window.location.origin})}>Sign out</Button>
    </Wrapper>
    )
};

const Wrapper = styled.header`

`
const Button= styled.button`
`

export default SignOutButton;