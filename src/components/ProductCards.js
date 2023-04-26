import React from "react";

function ProductCards({ onProductData }) {
  const renderProductCards = () =>
    onProductData.map((product) => {
      return (
        <div className="product_cards--card" key={product.id}>
          <img className="product_cards--image" src={product.image} alt="" />
          <div className="product_cards--description">
            <h4 className="product_cards--title">{product.title}</h4>
            <p className="product_cards--price">${product.price}</p>
          </div>
          <button className="product_cards--button">Add to Cart</button>
        </div>
      );
    });

  return <div className="product_cards--container">{renderProductCards()}</div>;
}

export default ProductCards;
