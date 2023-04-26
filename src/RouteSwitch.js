import React from "react";
import "./style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShoppingPage from "./components/ShoppingPage";
import ApiFetcher from "./components/ApiFetcher";
import HomePage from "./components/HomePage";

const RouteSwitch = () => {
  const [productData, setProductData] = React.useState([]);

  const handleDataFetched = (data) => {
    setProductData(data);
  };
  return (
    <>
      <ApiFetcher onDataFetched={handleDataFetched} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage onProductData={productData} />} />
          <Route
            path="/shop"
            element={<ShoppingPage onProductData={productData} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RouteSwitch;
