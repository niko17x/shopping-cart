import React from "react";
import NavBar from "../NavBar/NavBar";
import ShopNowButton from "../ShopNowButton/ShopNowButton";
import { DataContext } from "../../App";
// import ItemCategoryLink from "../ItemCategoryLink/ItemCategoryLink";

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
