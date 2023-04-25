import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import NavBar from "./NavBar";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("Check that NavBar component", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <NavBar />
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
    expect(screen.queryByText(/New Stock/)).not.toBeInTheDocument(); // Menu is initially closed
    fireEvent.click(hamburgerElement);
    expect(screen.getByText(/New Stock/)).toBeInTheDocument(); // Menu is opened
  });
});
