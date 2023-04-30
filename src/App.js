import React from "react";
import "./style.css";
import ApiFetcher from "./components/ApiFetcher";
import RouteSwitch from "./routes/RouteSwitch";

function App() {
  const [productData, setProductData] = React.useState([]);
  const [itemInCart, setItemInCart] = React.useState(0);
  const [showModal, setShowModal] = React.useState(false);

  const handleDataFetched = React.useCallback((data) => {
    setProductData(data);
  }, []);

  const toggleModal = () => {
    setShowModal(!showModal);
    console.log(showModal);
  };
  console.log(showModal);

  return (
    <>
      <ApiFetcher onDataFetched={handleDataFetched} />
      <RouteSwitch
        apiData={productData}
        itemInCart={itemInCart}
        modalDisplay={showModal}
        toggleModal={toggleModal}
      />
    </>
  );
}

export default App;
