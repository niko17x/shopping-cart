import React from "react";

function ApiFetcher({ onDataFetched }) {
  // console.log("api data fetched.");
  const ALL_PRODUCTS_URL = "https://fakestoreapi.com/products";
  React.useEffect(() => {
    fetch(ALL_PRODUCTS_URL)
      .then((response) => response.json())
      .then((data) => onDataFetched(data))
      .catch((error) => console.log(error));
  }, [onDataFetched]);

  return null;
}

export default ApiFetcher;
