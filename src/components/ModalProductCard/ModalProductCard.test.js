// ModalProductCard => Individual product cards within the modal // Card displays product image, title, price and increment/decrement buttons // Option to remove the card from modal if quantity is less than 1.

import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/react";
import ModalProductCard from "./ModalProductCard";
import { BrowserRouter } from "react-router-dom";
import { DataContext } from "../../App";
import userEvent from "@testing-library/user-event";
import { async } from "q";

describe("ModalProductCard component", () => {
  const renderWithProviders = (providerValue = {}, ...options) => {
    const Wrapper = ({ children }) => (
      <BrowserRouter>
        <DataContext.Provider value={providerValue}>
          {children}
        </DataContext.Provider>
      </BrowserRouter>
    );
    return render(<ModalProductCard />, { wrapper: Wrapper, ...options });
  };

  const funcItemInCartData = (quantity) => {
    const mockItemInCartData = [
      {
        index: 1,
        image: "product image 1",
        title: "product 1",
        price: 10,
        quantity: quantity,
      },
    ];
    return mockItemInCartData;
  };

  it("product image, title and price should be rendering data from itemInCartData", () => {
    const customProviderValue = { itemInCartData: funcItemInCartData(1) };
    renderWithProviders(customProviderValue);
    const imageElement = screen.getByRole("img");
    expect(imageElement).toBeInTheDocument();
  });

  it('renders "remove/keep in cart" buttons when addMinusQuantity (item quantity) < 1', () => {
    const customProviderValue = { itemInCartData: funcItemInCartData(0) };
    renderWithProviders(customProviderValue);
    const removeButton = screen.getByText(/remove/i);
    expect(removeButton).toBeInTheDocument();
    const keepItemButton = screen.getByText(/keep in cart/i);
    expect(keepItemButton).toBeInTheDocument();
  });

  it("increments counter when add button is clicked", async () => {
    const mockAddMinusQuantity = jest.fn();

    render(
      <BrowserRouter>
        <DataContext.Provider
          value={{
            itemInCartData: funcItemInCartData(1),
            addMinusQuantity: mockAddMinusQuantity,
          }}
        >
          <ModalProductCard />
        </DataContext.Provider>
      </BrowserRouter>
    );

    const paragraphElement = screen.getByText(1);
    expect(paragraphElement).toBeInTheDocument();

    const addButton = screen.getByText("+");
    expect(addButton).toBeInTheDocument();
    fireEvent.click(addButton);
    expect(mockAddMinusQuantity).toHaveBeenCalled();
  });
});
