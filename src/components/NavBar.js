import React from "react";
import { Link } from "react-router-dom";

function NavBar({ itemInCart }) {
  const navBarLeft = () => (
    <div className="navbar--left">
      <img src="../main-logo.png" className="navbar--main_logo" alt="" />
    </div>
  );

  const navBarRight = () => (
    <div className="navbar--right">
      <Link to={"/"}>
        <h2 className="hover">Home</h2>
      </Link>
      <Link to={"/shop"}>
        <h2 className="hover">Shop</h2>
      </Link>
      <div className="navbar--cart_container">
        <img
          className="navbar--cart_outline hover"
          src="../shopping-cart.svg"
          alt="shopping cart outline."
        />
        {itemInCart ? <div className="item-indicator"></div> : <div></div>}
      </div>
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
