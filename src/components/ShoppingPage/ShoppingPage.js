import React from "react";
import NavBar from "../NavBar/NavBar";
import ProductCards from "../ProductCards/ProductCards";
import CartModal from "../CartModal/CartModal";

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
