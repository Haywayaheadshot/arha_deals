import React from "react";
import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";

jest.mock("../../assets/apple-phones.png", () => "path/to/apple-phones.png");
jest.mock(
  "../../assets/black_baby_feeding_bottle_3.png",
  () => "path/to/droid.png"
);

describe("HomePage component", () => {
  beforeEach(() => {
    render(
      <Router>
        <HomePage />
      </Router>
    );
  });

  it("renders the heading", () => {
    const headingElement = screen.getByText("Quality Affordable Products!");
    expect(headingElement).toBeInTheDocument();
  });

  it('renders the "Check out phones" text', () => {
    const iProductsElement = screen.getByText("Check Out Phones section");
    expect(iProductsElement).toBeInTheDocument();
  });

  it('renders the "Phone Hacks" heading', () => {
    const featuredProductsHeadingElement = screen.getByText("Phone Hacks");
    expect(featuredProductsHeadingElement).toBeInTheDocument();
  });

  it('renders the "Featured Products" heading', () => {
    const featuredProductsHeadingElement =
      screen.getByText("Featured Products");
    expect(featuredProductsHeadingElement).toBeInTheDocument();
  });

  it('renders the "View more" text', () => {
    const viewMoreElement = screen.getByText("View more");
    expect(viewMoreElement).toBeInTheDocument();
  });

  it('renders the "Tech News" text', () => {
    const viewMoreElement = screen.getByText("Tech News");
    expect(viewMoreElement).toBeInTheDocument();
  });

  it('renders the "Check out Baby Products paragraph" text', () => {
    const androidGadjetsElement = screen.getByText(
      "Check out baby products from Turkey."
    );
    expect(androidGadjetsElement).toBeInTheDocument();
  });

  it('renders the "Exclusive Items" heading', () => {
    const exclusiveItemsHeadingElement = screen.getByText("Exclusive Items");
    expect(exclusiveItemsHeadingElement).toBeInTheDocument();
  });
});
