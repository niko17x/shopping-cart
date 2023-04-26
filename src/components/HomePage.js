import React from "react";
import NavBar from "./NavBar";
import ShopNowButton from "./ShopNowButton";
import ItemCategoryLink from "./ItemCategoryLink";

function HomePage({ onProductData }) {
  return (
    <div className="homepage--container">
      <NavBar />
      <ShopNowButton />
      <ItemCategoryLink onProductData={onProductData} />
    </div>
  );
}

export default HomePage;
