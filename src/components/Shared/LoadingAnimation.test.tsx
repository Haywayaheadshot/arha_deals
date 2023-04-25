import React from "react";
import { render } from "@testing-library/react";
import LoadingAnimation from "./LoadingAnimation";
import "@testing-library/jest-dom";

describe("LoadingAnimation", () => {
  it("renders the loading button with correct text and attributes", () => {
    const { getByRole } = render(<LoadingAnimation />);
    const loadingButton = getByRole("button");
    expect(loadingButton).toBeInTheDocument();
    expect(loadingButton).toHaveTextContent("Loading...");
    expect(loadingButton).toHaveAttribute("type", "button");
    expect(loadingButton).toHaveAttribute("disabled");
    expect(loadingButton).toHaveClass(
      "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
    );
  });
});
