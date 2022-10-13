import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

const LoginCard = styled.div`
width: 35%;
display: flex; 
flex-direction: column;
`;

const LoginImage = styled.div`
width: 30%;
`;
const Inputs = styled.div`
display: flex; 
flex-direction: column; 
justify-content: center
`;

export const Login = () => {
  return (
    <Container className="d-flex flex-row justify-content-center align-item-center">
      <LoginCard>
        <h1>Login</h1>
        {/* <!-- Email input --> */}
        <Inputs>
          <input type="email" id="form2Example1" class="form-control" />
          <label class="form-label" for="form2Example1">
            Email address
          </label>
        </Inputs>
        {/* <!-- Password input --> */}
        <Inputs>
          <input type="password" id="form2Example2" class="form-control" />
          <label class="form-label" for="form2Example2">
            Password
          </label>
        </Inputs>
        {/* <!-- Submit button --> */}
        <button type="button" class="btn btn-primary btn-block mb-4">
          Sign in
        </button>
      </LoginCard>
      <LoginImage>
        <p>images</p>
      </LoginImage>
    </Container>
  );
};
