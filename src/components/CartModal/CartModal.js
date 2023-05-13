import React from "react";
import ModalProductCard from "../ModalProductCard/ModalProductCard";
import { DataContext } from "../../App";

function CartModal() {
  const { toggleModal, showModal, itemInCartData } =
    React.useContext(DataContext);

  const renderModal = () => {
    return (
      <div className={`modal ${showModal ? "show" : ""}`}>
        <div className="modal--content" role="dialog">
          <button className="close-button hover" onClick={toggleModal}>
            &times;
          </button>
          <div className="cart_modal--cards_in_modal">
            <ModalProductCard />
          </div>
          {itemInCartData.length === 0 ? (
            <div className="empty_cart_message">
              <h3>Your Cart is Empty 🥺</h3>
            </div>
          ) : (
            <div className="cart_modal--footer">
              <p>
                Total Price: $
                {itemInCartData.reduce(function (accumulator, currentValue) {
                  return (
                    accumulator + currentValue.price * currentValue.quantity
                  );
                }, 0)}
              </p>
              <button className="check_out_button button_hover">
                Check Out
              </button>
            </div>
          )}
        </div>
      </div>
    );
  };

  return <>{renderModal()}</>;
}

export default CartModal;
