import React from "react";

function ShopNowButton() {
  const shopNowButton = () => (
    <button className="button--shop_now">Shop Now</button>
  );

  return <div className="shop_now_button--container">{shopNowButton()}</div>;
}

export default ShopNowButton;
