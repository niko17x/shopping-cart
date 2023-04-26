import React from "react";
import "./style.css";
import ApiFetcher from "./components/ApiFetcher";
import RouteSwitch from "./routes/RouteSwitch";

function App() {
  const [productData, setProductData] = React.useState([]);

  const handleDataFetched = (data) => {
    setProductData(data);
  };

  return (
    <>
      <ApiFetcher onDataFetched={handleDataFetched} />
      <RouteSwitch apiData={productData} />
    </>
  );
}

export default App;
