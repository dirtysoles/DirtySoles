import React from "react";
import { Button } from "../components/Button";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  min-height: 100vh;
`;

const LoginSide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width:600px;
  width: 50%;
`;
const LoginCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  gap: 5px; 
  align-items: center; 
  width: 350px;
  height: 400px;
  position: relative;
  text-align: center;
  padding: 20px 0px; 
  margin: auto;
  box-shadow: 0 0 20px 0px rgb(0 0 0 / 10%);
  overflow: hidden;
`;

const LoginImage = styled.div`
  width: 50%; 
  display: flex; 
  justify-content: center; 
  align-items: center; 
`;

const LoginTitle = styled.div`
display: flex; 
justify-content: center;
width: 100px; 
border-bottom: 3px solid #001aff;;
`;

const LoginInp = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%; 
  justify-content: space-between;
  padding: 10px;
`;

export const Login = () => {
  return (
    <Wrapper>
      <LoginImage>
      <img src={ require('../images/spinningshoe.gif') } width="100%" className="d-flex justify-content-center align-items-center" />
      </LoginImage>
      <LoginSide>
        <LoginCard className="shadow-lg p-3 bg-white rounded">
          <LoginTitle>
            <h4 className="">Login</h4>
          </LoginTitle>
          <LoginInp>
            <input type="text" placeholder="Email"></input>
            <br></br>
            <input type="text" placeholder="Password"></input>
            <Button>Login</Button>
          </LoginInp>
        </LoginCard>
      </LoginSide>
    </Wrapper>
  );
};
