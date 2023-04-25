import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ShoppingPage from "./components/ShoppingPage";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/shop" element={<ShoppingPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
