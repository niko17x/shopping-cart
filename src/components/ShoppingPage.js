import React from "react";
import NavBar from "./NavBar";
import ProductCards from "./ProductCards";
import CartModal from "./CartModal";

function ShoppingPage() {
  return (
    <div>
      <NavBar />
      <ProductCards />
      <CartModal />
    </div>
  );
}

export default ShoppingPage;
