import React from "react";
import "../style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShoppingPage from "../components/ShoppingPage";
import HomePage from "../components/HomePage";

const RouteSwitch = ({ apiData, itemInCart }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<HomePage onProductData={apiData} itemInCart={itemInCart} />}
        />
        <Route
          path="/shop"
          element={
            <ShoppingPage onProductData={apiData} itemInCart={itemInCart} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
