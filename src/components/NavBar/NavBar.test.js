import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/react";
import { DataContext } from "../../App";
import NavBar from "./NavBar";
import { BrowserRouter } from "react-router-dom";

describe("NavBar component", () => {
  it("renders home, shop and shopping cart", () => {
    const mockToggleModal = jest.fn();
    render(
      <BrowserRouter>
        <DataContext.Provider
          value={{ isItemInCart: false, toggleModal: mockToggleModal }}
        >
          <NavBar />
        </DataContext.Provider>
      </BrowserRouter>
    );

    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/Shop/i)).toBeInTheDocument();
    expect(screen.getByAltText(/shopping cart outline/i)).toBeInTheDocument();
  });
});
