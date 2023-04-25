import React from "react";
import NavBar from "./NavBar";
import ShopNowButton from "./ShopNowButton";
import ItemCategoryLink from "./ItemCategoryLink";
import ApiFetcher from "./ApiFetcher";

function HomePage() {
  const [productData, setProductData] = React.useState([]);

  const handleDataFetched = (data) => {
    setProductData(data);
  };

  // const renderProductData = () => {
  //   productData.map((product) => {
  //     return (
  //       <div key={product.id}>
  //         <h2>{product.title}</h2>
  //       </div>
  //     );
  //   });
  // };

  return (
    <div className="homepage--container">
      <ApiFetcher onDataFetched={handleDataFetched} />
      <NavBar />
      <ShopNowButton />
      <ItemCategoryLink onProductData={productData} />
    </div>
  );
}

export default HomePage;
