import React from "react";
import { Link } from "react-router-dom";

function ShopNowButton() {
  const shopNowButton = () => (
    <Link to={"/shop"}>
      <button className="button--shop_now">Shop Now</button>
    </Link>
  );

  return <div className="shop_now_button--container">{shopNowButton()}</div>;
}

export default ShopNowButton;
