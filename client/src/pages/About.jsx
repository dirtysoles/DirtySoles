import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  padding: 78px 0px;
  background-color: #161616;
  img {
    height: auto;
    width: 490px;
  }
`;

const Main = styled.div`
  width: 1130px;
  max-width: 95%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const AboutText = styled.div`
  width: 550px;

  h1 {
    color: rgb(255, 255, 255);
    font-size: 80px;
    text-transform: capitalize;
    margin-bottom: 20px;
    font-family: "Times New Roman", Times, serif;
  }
  h5 {
    color: rgb(150, 40, 40);
    font-size: 25px;
    text-transform: capitalize;
    margin-bottom: 25px;
    letter-spacing: 2px;
    font-family: "Times New Roman", Times, serif;
  }
  p {
    color: rgb(255, 255, 255);
    letter-spacing: 1px;
    line-height: 28px;
    font-size: 18px;
    margin-bottom: 45px;
  }
`;

export const About = () => {
  return (
    <Wrap>
      <Main>
        <img src={require("../images/about.jpg")} />
        <AboutText>
          <h1>Dirty Soles</h1>
          <h5>Our mission</h5>
          <p>
            Our mission is to provide access to the world’s most coveted shoes
            in the smartest way possible. Buy the hottest sneakers now!
            Negotiating, Trades, and Purchase can be done in store.
          </p>
        </AboutText>
      </Main>
    </Wrap>
  );
};
