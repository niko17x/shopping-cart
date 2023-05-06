import React from "react";
import { render, screen } from "@testing-library/react";
import { DataContext } from "../../App";
import "@testing-library/jest-dom";
import CartModal from "./CartModal";

describe("CartModal", () => {
  test("renders cart modal with empty cart message", () => {
    const toggleModal = jest.fn();
    const itemInCartData = [];

    render(
      <DataContext.Provider
        value={{ toggleModal, showModal: true, itemInCartData }}
      >
        <CartModal />
      </DataContext.Provider>
    );

    // Assert that the empty cart message is displayed
    expect(screen.getByText(/Your Cart is Empty 🥺/i)).toBeInTheDocument();
  });

  test("renders cart modal with product cards and total price", () => {
    const toggleModal = jest.fn();
    const itemInCartData = [
      { id: 1, title: "Mens Cotton Jacket", price: 55, quantity: 2 },
      { id: 2, title: "White Gold Plated Princess", price: 10, quantity: 4 },
    ];

    render(
      <DataContext.Provider
        value={{ toggleModal, showModal: true, itemInCartData }}
      >
        <CartModal />
      </DataContext.Provider>
    );

    // Assert that the product cards are displayed
    expect(screen.getByText("Mens Cotton Jacket")).toBeInTheDocument();
    expect(screen.getByText(/white gold plated princess/i)).toBeInTheDocument();
    screen.debug();

    // Assert that the total price is displayed correctly
    expect(screen.getByText("Total Price: $150")).toBeInTheDocument();
  });

  test("calls toggleModal when close button is clicked", () => {
    const toggleModal = jest.fn();
    const itemInCartData = [];

    render(
      <DataContext.Provider
        value={{ toggleModal, showModal: true, itemInCartData }}
      >
        <CartModal />
      </DataContext.Provider>
    );

    const closeButton = screen.getByRole("button", { name: "×" });

    // Simulate a user click on the close button
    closeButton.click();

    // Assert that toggleModal function is called once
    expect(toggleModal).toHaveBeenCalledTimes(1);
  });
});
