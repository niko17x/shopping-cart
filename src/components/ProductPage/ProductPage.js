import React from "react";
import NavBar from "../NavBar/NavBar";
import CartModal from "../CartModal/CartModal";
import { useParams } from "react-router";
import { DataContext } from "../../App";

function ProductPage() {
  const { productData, addItemToCart } = React.useContext(DataContext);
  const { productId } = useParams();
  // Get data from URL of current page. Use item.id to find matching product:
  const product = productData.find(
    (item) => parseInt(item.id) === parseInt(productId)
  );

  const renderProduct = () => {
    return product ? (
      <>
        <img className="product_page--image" src={product.image} alt="" />
        <div className="product_page--details">
          <h2 className="product_page--title">{product.title}</h2>
          <p className="product_page--description">{product.description}</p>
          <span className="product_page--price">${product.price}</span>
        </div>
        <button
          className="product_page--button cart_button"
          onClick={(event) => addItemToCart(event)}
          id={product.id}
        >
          Add to Cart
        </button>
      </>
    ) : (
      <div>Product not found.</div>
    );
  };

  return (
    <>
      <NavBar />
      <div className="product_page--container">
        <CartModal />
        {renderProduct()}
      </div>
    </>
  );
}

export default ProductPage;
