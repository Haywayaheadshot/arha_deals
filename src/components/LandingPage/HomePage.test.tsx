import React from "react";
import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";
import "@testing-library/jest-dom";

jest.mock("../../assets/apple-phones.png", () => "path/to/apple-phones.png");
jest.mock("../../assets/droid.png", () => "path/to/droid.png");

describe("HomePage component", () => {
  it("renders the heading", () => {
    render(<HomePage />);
    const headingElement = screen.getByText("Quality Affordable Products!");
    expect(headingElement).toBeInTheDocument();
  });

  it('renders the "Check out iProducts" text', () => {
    render(<HomePage />);
    const iProductsElement = screen.getByText("Check out iProducts");
    expect(iProductsElement).toBeInTheDocument();
  });

  it('renders the "Featured Products" heading', () => {
    render(<HomePage />);
    const featuredProductsHeadingElement =
      screen.getByText("Featured Products");
    expect(featuredProductsHeadingElement).toBeInTheDocument();
  });

  it('renders the "View more" text', () => {
    render(<HomePage />);
    const viewMoreElement = screen.getByText("View more");
    expect(viewMoreElement).toBeInTheDocument();
  });

  it('renders the "Check out Android gadjets" text', () => {
    render(<HomePage />);
    const androidGadjetsElement = screen.getByText(
      "Check out Android gadjets."
    );
    expect(androidGadjetsElement).toBeInTheDocument();
  });

  it('renders the "Exclusive Items" heading', () => {
    render(<HomePage />);
    const exclusiveItemsHeadingElement = screen.getByText("Exclusive Items");
    expect(exclusiveItemsHeadingElement).toBeInTheDocument();
  });
});
