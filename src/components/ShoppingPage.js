import React from "react";
import NavBar from "./NavBar";
import ProductCards from "./ProductCards";

// const windowEvent = window.addEventListener("click", (event) => {
//   console.log(event.target.id);
// });

function ShoppingPage({ onProductData, itemInCart }) {
  // const addItemToCart = () => {
  //   const buttons = [
  //     ...document.getElementsByClassName("product_cards--button"),
  //   ];
  //   buttons.forEach((button) => {
  //     button.addEventListener("click", (event) => {
  //       const item = buttons.find((item) => item.id === event.target.id);
  //       return item ? console.log(item) : console.log("not found");
  //     });
  //   });
  // };

  return (
    <div>
      {/* {addItemToCart()} */}
      <NavBar itemInCart={itemInCart} />
      <ProductCards onProductData={onProductData} />
    </div>
  );
}

export default ShoppingPage;
