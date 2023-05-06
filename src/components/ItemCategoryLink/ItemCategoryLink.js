// * Note: This component is not actively in use.

import React from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../App";

function ItemCategoryLink() {
  const { productData } = React.useContext(DataContext);

  const renderAllItemCategories = () => {
    const allCategories = productData.map((product) => product.category);
    const getUniqueCategories = allCategories.reduce(
      (accumulator, currentValue) => {
        return accumulator.includes(currentValue)
          ? accumulator
          : [...accumulator, currentValue];
      },
      []
    );
    return getUniqueCategories.map((item, index) => {
      return (
        <li className="links-categories hover" key={`item-${index}`}>
          <Link to={`/shop`}>{item.toUpperCase()}</Link>
        </li>
      );
    });
  };

  return (
    <div className="item_category_link--container">
      <ul className="ul-item_category_link">{renderAllItemCategories()}</ul>
    </div>
  );
}

export default ItemCategoryLink;
