import React from "react";
import "./style.css";
import ApiFetcher from "../src/components/ApiFetcher/ApiFetcher";
import RouteSwitch from "../src/routes/RouteSwitch";

export const DataContext = React.createContext();

// window.addEventListener("click", (event) => {
//   console.log(event.target);
// });

function App() {
  const [productData, setProductData] = React.useState([]);
  const [isItemInCart, setIsItemInCart] = React.useState(0);
  const [showModal, setShowModal] = React.useState(false);
  const [itemInCartData, setItemInCartData] = React.useState([]);

  const handleDataFetched = React.useCallback((data) => {
    const addQuantityToData = data.map((item) => ({
      ...item,
      quantity: 0,
    }));
    setProductData(addQuantityToData);
  }, []);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const addItemToCart = (event) => {
    const selectedProduct = productData.find(
      (item) => parseInt(item.id) === parseInt(event.target.id)
    );
    const itemAlreadyInCartIndex = itemInCartData.findIndex(
      (item) => parseInt(item.id) === parseInt(event.target.id)
    );

    if (itemAlreadyInCartIndex >= 0) {
      const updatedCartData = [...itemInCartData];
      updatedCartData[itemAlreadyInCartIndex].quantity += 1;
      setItemInCartData(updatedCartData);
    } else if (selectedProduct) {
      selectedProduct.quantity = 1;
      setItemInCartData((prevData) => [...prevData, selectedProduct]);
      setIsItemInCart(true);
      setShowModal(true);
    }
  };

  const addMinusQuantity = (event) => {
    const isAddButton = event.target.classList.contains("add_button");
    const increment = isAddButton ? 1 : -1;
    mapItemInCartData(event, increment);
  };

  const mapItemInCartData = (event, increment) => {
    const selectedProductId = parseInt(event.target.id);
    setItemInCartData((prevData) =>
      prevData.map((item) =>
        parseInt(item.id) === selectedProductId
          ? { ...item, quantity: item.quantity + increment }
          : { ...item }
      )
    );
  };

  const deleteProductCard = (event) => {
    const selectedProductId = parseInt(event.target.id);
    const incrementByOne = 1;
    const updatedItems = itemInCartData.filter(
      (item) => parseInt(item.id) !== selectedProductId
    );

    if (event.target.classList.contains("delete_button")) {
      setItemInCartData(updatedItems);
    } else {
      mapItemInCartData(event, incrementByOne);
    }

    // Remove red indicator on cart outline in navbar:
    setIsItemInCart((prevValue) => {
      return updatedItems.length > 0 ? prevValue : false;
    });
  };

  return (
    <>
      <DataContext.Provider
        value={{
          itemInCartData,
          isItemInCart,
          toggleModal,
          showModal,
          addItemToCart,
          productData,
          addMinusQuantity,
          deleteProductCard,
        }}
      >
        <ApiFetcher onDataFetched={handleDataFetched} />
        <RouteSwitch apiData={productData} />
      </DataContext.Provider>
    </>
  );
}

export default App;
