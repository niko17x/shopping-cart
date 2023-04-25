import React from "react";

function ApiFetcher({ onDataFetched }) {
  const ALL_PRODUCTS_URL = "https://fakestoreapi.com/products";

  // React.useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await fetch(ALL_PRODUCTS_URL);
  //     const json = await result.json();
  //   };
  //   fetchData();
  // }, [onDataFetched]);

  React.useEffect(() => {
    fetch(ALL_PRODUCTS_URL)
      .then((response) => response.json())
      .then((data) => onDataFetched(data))
      .catch((error) => console.log(error));
  }, [onDataFetched]);

  return null;
}

export default ApiFetcher;
