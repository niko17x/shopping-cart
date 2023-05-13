import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import { DataContext } from "../../App";

describe("render HomePage component", () => {
  const mockHomePage = {
    productData: {},
    isItemInCart: false,
  };
  it("should render without errors", () => {
    render(
      <BrowserRouter>
        <DataContext.Provider value={mockHomePage}>
          <HomePage />
        </DataContext.Provider>
      </BrowserRouter>
    );
  });

  it("should render the NavBar component with correct isItemInCart context", () => {
    render(
      <BrowserRouter>
        <DataContext.Provider value={mockHomePage}>
          <HomePage />
        </DataContext.Provider>
      </BrowserRouter>
    );
    const navBarComponent = screen.getByRole("navigation");
    expect(navBarComponent).toBeInTheDocument();
  });

  it("should render shopNow button", () => {
    render(
      <BrowserRouter>
        <DataContext.Provider value={mockHomePage}>
          <HomePage />
        </DataContext.Provider>
      </BrowserRouter>
    );
    const shopNowButton = screen.getByText(/shop now/i);
    expect(shopNowButton).toBeInTheDocument();
  });
});
