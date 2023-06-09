import React from "react";
import "../style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShoppingPage from "../components/ShoppingPage/ShoppingPage";
import HomePage from "../components/HomePage/HomePage";
import ProductPage from "../components/ProductPage/ProductPage";
import { DataContext } from "../App";

const RouteSwitch = () => {
  const { productData } = React.useContext(DataContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage onProductData={productData} />} />
        <Route path="/shop" element={<ShoppingPage />} />
        <Route
          path="/item-page/:productId"
          element={<ProductPage onProductData={productData} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
