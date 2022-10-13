import { Link } from "react-router-dom";
import {Button} from "react-bootstrap"
import styled from "styled-components";


const DisplayButton = styled.div`
width: 15%;
display: flex;
flex-direction: row; 
justify-content: space-between;`;

export const Home = () => {
  return (
    <div className="Home-Container">
      <div className="Home">
        <Link to="/products" style={{textDecoration: "None", color: "black"}}>
          <img></img>
          <h1>Introducing Dirty Soles Kicks</h1>
          <p>
            A collection that is around matket value. Don't miss out on another
            drop ever{" "}
          </p>
          <p>Visit the store to see our selection of exclusive sneakers.</p>
          <DisplayButton>
            <Button>Shop Now</Button>

            <Button>Terms</Button>
          </DisplayButton>
        </Link>
      </div>
    </div>
  );
};
