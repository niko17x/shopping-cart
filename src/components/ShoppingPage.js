import React from "react";
import NavBar from "./NavBar";
import ProductCards from "./ProductCards";

function ShoppingPage({ onProductData, itemInCart }) {
  return (
    <div>
      <NavBar itemInCart={itemInCart} />
      <ProductCards onProductData={onProductData} />
    </div>
  );
}

export default ShoppingPage;
