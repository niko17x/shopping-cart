import React from "react";
import NavBar from "./NavBar";
import ProductCards from "./ProductCards";
import CartModal from "./CartModal";

// const windowEvent = window.addEventListener("click", (event) => {
//   console.log(event.target.id);
// });

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
