import React from "react";
import { render } from "@testing-library/react";
import FeaturedProducts from "./FeaturedProducts";

describe("FeaturedProducts", () => {
  it("should render a carousel with three images", () => {
    const { getAllByAltText } = render(<FeaturedProducts />);
    const images = getAllByAltText(/slide/);
    expect(images).toHaveLength(3);
  });
});
