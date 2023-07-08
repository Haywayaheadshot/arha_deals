import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import NavBar from "./NavBar";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("Check that NavBar component", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <NavBar
          totalCart={0}
          cartArrLength={0}
          filteredCartItem={[]}
          foundPhonesQuantity={undefined}
        />
      </BrowserRouter>
    );
  });

  test("renders the title", () => {
    const titleElement = screen.getByText(/Budget/);
    expect(titleElement).toBeInTheDocument();
  });

  test("displays the current time", () => {
    const timeElement = screen.getByText(/^\d{1,2}:\d{2}:\d{2}$/); // Matches the format of the displayed time
    expect(timeElement).toBeInTheDocument();
  });

  test("shows the menu when the hamburger is clicked", () => {
    const hamburgerElement = screen.getByLabelText(/Show menu/);
    expect(screen.queryByText(/Reels/)).not.toBeInTheDocument(); // Menu is initially closed
    fireEvent.click(hamburgerElement);
    expect(screen.getByText(/Reels/)).toBeInTheDocument(); // Menu is opened
  });

  test("closes the menu when an item the hamburger is clicked", () => {
    const hamburgerElement = screen.getByLabelText(/Show menu/);
    expect(screen.queryByText(/Tech News/)).not.toBeInTheDocument(); // Menu is initially closed
    fireEvent.click(hamburgerElement);
    expect(screen.getByText(/Tech News/)).toBeInTheDocument(); // Menu is opened
    const clickLink = screen.getByText(/Tech News/);
    fireEvent.click(clickLink);
    expect(screen.queryByText(/Tech News/)).not.toBeInTheDocument(); // Menu is closed when the item is clicked
  });
});
