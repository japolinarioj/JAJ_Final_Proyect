import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const SignUpButton = () => {
  const { loginWithRedirect } = useAuth0();

  return(
    <Wrapper>
        <Button onClick={()=> loginWithRedirect({screen_hint:'signup'})}>Sign up</Button>
    </Wrapper>
    )
};

const Wrapper = styled.header`

`
const Button= styled.button`
`

export default SignUpButton;