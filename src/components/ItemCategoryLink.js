import React from "react";
import { Link } from "react-router-dom";

function ItemCategoryLink({ onProductData }) {
  const renderAllItemCategories = () => {
    const allCategories = onProductData.map((product) => product.category);
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
        <li className="links-categories hover" key={index}>
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
