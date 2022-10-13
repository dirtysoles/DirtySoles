//import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
import {Route, Routes} from 'react-router-dom';
import { Container } from "react-bootstrap";
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Products} from "./pages/Products"
import {ProductDetails} from "./pages/ProductDetails"
import {Login} from "./pages/Login";
import { Navbar } from "./components/Navbar";
import "./App.css";

const App = () => {
  //filter helps with giving out specific number of items
  return (
    <>
    <Navbar/>
    <Container className="mb-4">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/products" element={<Products/>}></Route>
        <Route path="/products/:sneakerId" element={<ProductDetails/>}></Route>
        <Route path="/about" element={<About/>}> </Route>
        <Route path="/login" element={<Login/>}> </Route>
      </Routes>
    </Container>
    </>
  );
};

export default App;
