import React from "react";
import { Link } from "react-router-dom";

function ProductCards({ onProductData }) {
  const renderProductCards = () =>
    onProductData.map((product) => {
      return (
        <Link to={`/product-page/${product.id}`}>
          <div className="product_cards--card" key={product.id}>
            <img className="product_cards--image" src={product.image} alt="" />
            <div className="product_cards--description">
              <h4 className="product_cards--title">{product.title}</h4>
              <p className="product_cards--price">${product.price}</p>
            </div>
            <button
              className="product_cards--button cart_button"
              id={product.id}
            >
              Add to Cart
            </button>
          </div>
        </Link>
      );
    });

  return <div className="product_cards--container">{renderProductCards()}</div>;
}

export default ProductCards;
