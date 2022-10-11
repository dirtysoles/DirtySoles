import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="Home-Container">
      <div className="Home">
        <Link to="/products">
          <img></img>
          <h1>Introducing Dirty Soles Kicks</h1>
          <p>
            A collection that is around matket value. Don't miss out on another
            drop ever{" "}
          </p>
          <p>Visit the store to see our selection of exclusive sneakers.</p>
          <div>
            <btn>Shop Now</btn>
            <btn>Terms</btn>
          </div>
        </Link>
      </div>
    </div>
  );
};
