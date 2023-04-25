import React from "react";

function ItemCategoryLink({ onProductData }) {
  const renderAllProductCategories = () => {
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
          {item.toUpperCase()}
        </li>
      );
    });
  };

  return (
    <div className="item_category_link--container">
      <ul className="ul-item_category_link">{renderAllProductCategories()}</ul>
    </div>
  );
}

export default ItemCategoryLink;
