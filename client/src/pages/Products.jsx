import React, { useState, useEffect } from "react";
import { ShoeCard } from "../components/ShoeCard";
import styled from "styled-components";
import axios from "axios";

const ProdPage = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProdTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ProdWrapper = styled.div`
    width: 100%; 
    display: flex; 
    justify-content: space-around;
    align-items: center;
`;

const Prod = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin:  4rem;
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
    <ProdPage>
      <ProdTitle>
        <h1>All Products</h1>
      </ProdTitle>
      <ProdWrapper>
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
      </ProdWrapper>
    </ProdPage>
  );
};
