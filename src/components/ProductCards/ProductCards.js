import React from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../App";

function ProductCards() {
  const { productData, addItemToCart } = React.useContext(DataContext);
  const renderProductCards = () =>
    productData.map((item, index) => {
      return (
        <div className="product_cards--card" key={`item-${index}`}>
          <Link className="product_cards--a-link" to={`/item-page/${item.id}`}>
            <img className="product_cards--image" src={item.image} alt="" />
            <div className="product_cards--description">
              <h4 className="product_cards--title">{item.title}</h4>
              <p className="product_cards--price">${item.price}</p>
            </div>
          </Link>
          <button
            className="product_cards--button cart_button"
            id={item.id}
            onClick={addItemToCart}
          >
            Add to Cart
          </button>
        </div>
      );
    });

  return <div className="product_cards--container">{renderProductCards()}</div>;
}

export default ProductCards;
