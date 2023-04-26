import React from "react";

function ProductCards({ onProductData }) {
  // console.log(onProductData);
  const renderCards = (image, title, price) => (
    <div className="product_cards--card">
      <img className="product_cards--image" src={image} alt="" />
      <div className="product_cards--description">
        <h4 className="product_cards--title">{title}</h4>
        <span className="product_cards--price">{price}</span>
      </div>
    </div>
  );

  const getDataFromApi = () => {
    onProductData.map((product) => {
      return renderCards(product.image, product.title, product.price);
    });
  };

  return <div>{getDataFromApi()}</div>;
}

export default ProductCards;
