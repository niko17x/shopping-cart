import React from "react";
import NavBar from "./NavBar";
import ProductCards from "./ProductCards";

function ShoppingPage({ onProductData }) {
  // console.log(onProductData);
  return (
    <div>
      <NavBar />
      <ProductCards onProductData={onProductData} />
    </div>
  );
}

export default ShoppingPage;
