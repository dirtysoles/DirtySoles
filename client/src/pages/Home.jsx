import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { ShoeCard } from "../components/ShoeCard";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import axios from "axios";

const DisplayButton = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`;

const FeaturedTitle = styled.div`
  display: flex;
  flex-direction: row;
  margin: 4rem;
  width: fit-content;
  align-items: center;
  border-bottom: 3px solid #001aff;
  h3 {
    font-weight: bolder;
  }
`;

const Featured = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Home = () => {
  const [sneakers, setSneakers] = useState([]); //read state

  const getSneakers = async () => {
    const data = await (
      await axios.get("http://localhost:13000/products")
    ).data;
    setSneakers(data.data);
  };

  useEffect(() => {
    getSneakers();
  }, []);

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center">
      <Link to="/products" style={{ textDecoration: "None", color: "black" }}>
        <img
          src="https://media.gq.com/photos/5a7a30cc8f045079315a6adb/16:9/w_2560%2Cc_limit/flight-club-goat-merger-gq.jpg"
          width="100%"
        ></img>
        <h1 style={{ margin: "20px 0px" }}>Introducing Dirty Soles Kicks</h1>
        <p>
          A collection that is around matket value. Don't miss out on another
          drop ever{" "}
        </p>
        <p>Visit the store to see our selection of exclusive sneakers.</p>
        <DisplayButton>
          <Button>Shop Now</Button>
          <Link to="/about" style={{ textDecoration: "None", color: "black" }}>
            <Button>Terms</Button>
          </Link>
        </DisplayButton>
      </Link>
      <FeaturedTitle>
        <h3>Featured Products</h3>
      </FeaturedTitle>
      <Featured>
        {sneakers
          .filter((shoe, idx) => idx < 4)
          .map((shoe) => (
            <ShoeCard
              name={shoe.name}
              img={shoe.images.regular}
              id={shoe.id}
              price={shoe.price}
            />
          ))}
      </Featured>
    </Container>
  );
};
