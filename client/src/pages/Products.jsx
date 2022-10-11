import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { ShoeCard } from "../components/ShoeCard";
import styled from "styled-components";
import axios from "axios";

const Prod = styled.div`
  display: flex;
  //width: 100vw;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  //margin:  4rem;
`;

export const Products = () => {
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
    <Container>
        <Prod>
          {sneakers.map((shoe) => (
            <ShoeCard
              name={shoe.name}
              img={shoe.images.regular}
              id={shoe.id}
              price={shoe.price}
            />
          ))}
        </Prod>
    </Container>
  );
};
