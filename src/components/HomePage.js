import React from "react";
import NavBar from "./NavBar";
import ShopNowButton from "./ShopNowButton";
import ItemCategoryLink from "./ItemCategoryLink";
import { DataContext } from "../App";

function HomePage() {
  const { productData, isItemInCart } = React.useContext(DataContext);

  return (
    <div className="homepage--container">
      <NavBar isItemInCart={isItemInCart} />
      <ShopNowButton />
      {/* <ItemCategoryLink onProductData={productData} /> */}
    </div>
  );
}

export default HomePage;
