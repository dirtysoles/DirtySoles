import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px; 
  margin: 0px auto; 
`;

const Info = styled.div`
display: flex; 
flex-direction: column; 
justify-content: center; 
align-items: center;
min-height: 100vh; 
h4 {

};
h3 {
  color: rgb(51, 51, 51);
};
span {
  text-align: justify;
  font-weight: 500;
  font-size: 21px;
  line-height: 1.75;
  color: rgb(51, 51, 51);
}
`;

const Terms = styled.div`
background: grey;
display: flex; 
flex-direction: column; 
justify-content: center; 
align-items: center;
min-height: 70vh; 
min-width: 100%;
`;

const Contact = styled.div`
display: flex; 
flex-direction: column; 
justify-content: center; 
align-items: center;
min-height: 100vh; `;

export const About = () => {
  return (
    <Wrapper>
      <Info>
        <h5>Who Are We</h5>
        <h3>Dirty Soles</h3>
        <span>"We are a local business that allows you to purchase exclusive shoes that are close to market value. We are willing to negotiate trades and purchase in store. "</span>
      </Info>
      <Terms>
        Terms
      </Terms>
      <Contact>
        Contact
      </Contact>
    </Wrapper>
  );
};
