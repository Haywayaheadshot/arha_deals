import React from "react";
import {
  render,
  screen,
  RenderResult,
  fireEvent,
} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Footer from "./Footer";

describe("Footer component", () => {
  let component: RenderResult;

  beforeEach(() => {
    component = render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
  });

  it("should scroll to top when arrow button is clicked", () => {
    const button = component.getByTestId("arrow-up");

    // Mock window.scrollTo function
    const scrollToMock = jest.fn();
    Object.defineProperty(window, "scrollTo", {
      value: scrollToMock,
      writable: true,
    });

    fireEvent.click(button);

    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: "smooth",
    });
  });

  it("should contain link to Tech News page", () => {
    const techNewsLink = component.getByText("Tech News");
    expect(techNewsLink).toBeInTheDocument();
  });

  test("should have links to social media accounts", () => {
    const tiktokLink = screen.getByRole("link", { name: /Tik Tok/i });
    const instagramLink = screen.getByRole("link", { name: /Instagram/i });
    const twitterLink = screen.getByRole("link", { name: /Twitter/i });

    expect(tiktokLink).toHaveAttribute(
      "href",
      "https://www.tiktok.com/@arhadeals"
    );
    expect(tiktokLink).toHaveAttribute("target", "_blank");
    expect(tiktokLink).toHaveAttribute("rel", "noopener noreferrer");
    expect(instagramLink).toHaveAttribute(
      "href",
      "https://www.instagram.com/arha_deals/"
    );
    expect(instagramLink).toHaveAttribute("target", "_blank");
    expect(instagramLink).toHaveAttribute("rel", "noopener noreferrer");
    expect(twitterLink).toHaveAttribute(
      "href",
      "https://twitter.com/arha_deals"
    );
    expect(twitterLink).toHaveAttribute("target", "_blank");
    expect(twitterLink).toHaveAttribute("rel", "noopener noreferrer");
  });
});
