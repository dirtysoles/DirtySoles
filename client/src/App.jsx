//import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
import {Route, Routes} from 'react-router-dom';
import {Home} from "./pages/Home";
import {Products} from "./pages/Products"
import {ProductDetails} from "./pages/ProductDetails"
import {About} from "./pages/About";
import {Admin} from "./pages/Admin";
import { Navbar } from "./components/Navbar";
import "./App.css";

const App = () => {
  //filter helps with giving out specific number of items
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/products" element={<Products/>}></Route>
        <Route path="/products/:sneakerId" element={<ProductDetails/>}></Route>
        <Route path="/admin" element={<Admin/>}> </Route>
      </Routes>
    </>
  );
};

export default App;
