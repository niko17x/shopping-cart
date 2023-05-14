import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/react";
import { DataContext } from "../../App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductPage from "./ProductPage";

// TODO: 1. Clicking on add to cart should addItemToCart context (use jest.fn()) for this // 2. Product image, title, description, price and button should be rendered on page // 3. The page url (number) should reflect the 'product' variable data.

// Mocking <CartModal> component to return null:
jest.mock("../NavBar/NavBar", () => () => null);
// Mocking <CartModal> component to return null:
jest.mock("../CartModal/CartModal", () => () => null);
// Mocking useParams hook to return { productId: '1' }
jest.mock("react-router", () => ({
  ...jest.requireActual("react-router"), // use actual for all other exports
  useParams: () => ({
    productId: "1",
  }),
}));

describe("productPage component", () => {
  it("renders product image when product is truthy", () => {
    const mockProductData = [
      {
        image: "image 1",
        title: "product 1",
        price: 10,
        id: 1,
      },
    ];
    const mockAddItemToCart = jest.fn();

    render(
      <BrowserRouter>
        <DataContext.Provider
          value={{
            productData: mockProductData,
            addItemToCart: mockAddItemToCart,
          }}
        >
          <ProductPage />
        </DataContext.Provider>
      </BrowserRouter>
    );

    expect(screen.getByAltText(/image 1/i)).toBeInTheDocument();
  });
});
