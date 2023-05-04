import React from "react";
import ModalProductCard from "./ModalProductCard";
import { DataContext } from "../App";

function CartModal() {
  const { toggleModal, showModal } = React.useContext(DataContext);

  const renderModal = () => {
    return (
      <div className={`modal ${showModal ? "show" : ""}`}>
        {/*  <div className="modal show"> */}
        <div className="modal--content">
          <button className="close-button hover" onClick={toggleModal}>
            &times;
          </button>

          <div className="cart_modal--cards_in_modal">
            <ModalProductCard />
          </div>

          <div className="cart_modal--footer">
            <p>Total Price</p>
            <button>Check Out</button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {renderModal()}
      {/* <ModalProductCar} /> */}
    </>
  );
}

export default CartModal;
