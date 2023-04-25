import React from "react";

function NavBar() {
  const navBarLeft = () => (
    <div className="navbar--left">
      <img src="../main-logo.png" className="navbar--main_logo" alt="" />
    </div>
  );

  const navBarRight = () => (
    <div className="navbar--right">
      <h2 className="hover">Home</h2>
      <h2 className="hover">Shop</h2>
      <img
        className="navbar--shopping_cart_outline hover"
        src="../shopping-cart.svg"
        alt="shopping cart outline."
      />
    </div>
  );

  return (
    <div className="navbar--container">
      {navBarLeft()}
      {navBarRight()}
    </div>
  );
}

export default NavBar;
