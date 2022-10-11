import axios from "axios";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "../components/Button";

const DetailPage = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
`;

const DetailPageLeft = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  margin: 0 auto;
`;

const DetailPageRight = styled.div`
  width: 50%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
`;

const DetailButton = styled.div`
  width: 100%;
  gap: 1rem;
  display: flex;
  flex-direction: row;
`;

const DetailRoute = styled.div`
  display: flex;
  flex-direction: row;
  span {
    color: #001aff;
  }
  a{
    text-decoration:none; 
    color: #777;
  }; 
`;

export const ProductDetails = () => {
  const params = useParams(); //read doc
  const [sneakersDetails, setSneakerDetails] = useState([]); //read state

  const getSneakerDetails = async () => {
    const data = await (
      await axios.get(
        `http://localhost:13000/products/${params?.sneakerId ?? ""}`
      )
    ).data;
    setSneakerDetails(data.data);
  };
  useEffect(() => {
    getSneakerDetails();
  }, []);

  return (
    <DetailPage>
      <DetailPageLeft>
        <DetailRoute>
          <Link to="/">Home/</Link>
          <Link to="/products">Products/</Link>
          <span>{sneakersDetails.name}</span>
        </DetailRoute>
        <img src={sneakersDetails.images?.regular} width="85%" />
      </DetailPageLeft>
      <DetailPageRight>
        <h1>{sneakersDetails.name}</h1>
        <h2>${sneakersDetails.price}</h2>
        <h1>sizes</h1>
        <p>
          The sizes are set to men. Buying for women sizes just subtract 1.5 to
          the men sizes. For example, women 6 is a men 4.5.
        </p>
        <DetailButton>
          <Button>button 1</Button>
          <Button>button 2</Button>
        </DetailButton>
        <h1>in stock: {sneakersDetails.stock}</h1>
        <h1>Product Colorway:{sneakersDetails.colorway}</h1>
      </DetailPageRight>
    </DetailPage>
  );
};
