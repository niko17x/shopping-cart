import React from "react";
import "./style.css";
import ApiFetcher from "./components/ApiFetcher";
import RouteSwitch from "./routes/RouteSwitch";

export const DataContext = React.createContext();

function App() {
  const [productData, setProductData] = React.useState([]);
  const [itemInCart, setItemInCart] = React.useState(0); // Indicates if item(s) in cart...
  const [showModal, setShowModal] = React.useState(false);
  const [itemInCartData, setItemInCartData] = React.useState([]);

  React.useEffect(() => {
    const checkIfItemInCart = !itemInCartData
      ? setItemInCart(false)
      : undefined;
    return checkIfItemInCart;
  }, [itemInCartData]);

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
      setItemInCart(true);
    }
  };

  return (
    <>
      <DataContext.Provider
        value={{
          itemInCartData,
          itemInCart,
          toggleModal,
          showModal,
          addItemToCart,
          productData,
        }}
      >
        <ApiFetcher onDataFetched={handleDataFetched} />
        <RouteSwitch apiData={productData} />
      </DataContext.Provider>
    </>
  );
}

export default App;
