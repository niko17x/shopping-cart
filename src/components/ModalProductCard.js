import React from "react";
import { DataContext } from "../App";

function ModalProductCard() {
  const { itemInCartData } = React.useContext(DataContext);

  const productCard = () =>
    itemInCartData.map((item, index) => {
      return (
        <div className="modal_product_card--container" key={`item-${index}`}>
          <img className="modal_product_card--image" src={item.image} alt="" />
          <div className="modal_product_card--description">
            <p className="modal_product_card--title">{item.title}</p>
            <p className="modal_product_card--price">${item.price}</p>
          </div>
          <div className="modal_product_car--edit_product">
            <button className="add_button edit_quantity_button">&#43;</button>
            <label className="quantity_label">
              <input
                className="quantity_input"
                type="number"
                value={item.quantity}
                readOnly
              ></input>
            </label>
            <button className="minus_button edit_quantity_button">
              &minus;
            </button>
          </div>
        </div>
      );
    });

  return <>{productCard()}</>;
}

export default ModalProductCard;
