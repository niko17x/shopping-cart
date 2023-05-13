import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductCards from "./ProductCards";
import { DataContext } from "../../App";
import { BrowserRouter } from "react-router-dom";

describe("testing ProductCard component", () => {
  test("addItemToCart is called when the button is clicked", () => {
    const addItemToCartMock = jest.fn();
    const productData = [
      { id: 1, image: "image1.jpg", title: "Product 1", price: 10 },
    ];

    const { getByText } = render(
      <BrowserRouter>
        <DataContext.Provider
          value={{
            productData,
            addItemToCart: addItemToCartMock,
          }}
        >
          <ProductCards />
        </DataContext.Provider>
      </BrowserRouter>
    );

    const addToCartButton = screen.getByText(/add to cart/i);
    fireEvent.click(addToCartButton);

    expect(addItemToCartMock).toHaveBeenCalledTimes(1);
  });
});
