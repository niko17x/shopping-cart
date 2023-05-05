import React from "react";
import { DataContext } from "../App";

function ModalProductCard() {
  const { itemInCartData, addMinusQuantity, deleteProductCard } =
    React.useContext(DataContext);

  const productCard = () =>
    itemInCartData.map((item, index) => {
      return (
        <div className="modal_product_card--container" key={`item-${index}`}>
          <img className="modal_product_card--image" src={item.image} alt="" />
          <div className="modal_product_card--description">
            <p className="modal_product_card--title">{item.title}</p>
            <p className="modal_product_card--price">${item.price}</p>
          </div>
          {item.quantity < 1 ? (
            <div className="modal_product_card--confirm_delete">
              <button
                className="delete_button button_hover"
                onClick={(event) => deleteProductCard(event)}
                id={item.id}
              >
                Remove
              </button>
              <button
                className="keep_item_button button_hover"
                onClick={(event) => deleteProductCard(event)}
                id={item.id}
              >
                Keep In Cart
              </button>
            </div>
          ) : (
            <div className="modal_product_card--edit_product">
              <button
                className="add_button edit_quantity_button"
                id={item.id}
                onClick={(event) => addMinusQuantity(event)}
              >
                &#43;
              </button>
              <p className="item_quantity">{item.quantity}</p>
              <button
                className="minus_button edit_quantity_button"
                id={item.id}
                onClick={(event) => addMinusQuantity(event)}
              >
                &minus;
              </button>
            </div>
          )}
        </div>
      );
    });

  return <>{productCard()}</>;
}

export default ModalProductCard;
