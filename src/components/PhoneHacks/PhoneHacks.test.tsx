import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { useSelector } from "react-redux";
import PhoneHacks from "./PhoneHacks";
import "@testing-library/jest-dom";

jest.mock("react-redux");

describe("PhoneHacks component", () => {
  beforeEach(() => {
    (useSelector as jest.Mock).mockImplementation(
      (callback: (state: any) => any) =>
        callback({
          hacks: {
            hacks: [
              {
                id: "1",
                title: "Hack 1",
                os: "android",
                description: "Description 1",
                video_url: "https://www.youtube.com/embed/video1",
                advantages: "Advantages 1",
              },
              {
                id: "2",
                title: "Hack 2",
                os: "iphone",
                description: "Description 2",
                video_url: "https://www.youtube.com/embed/video2",
                advantages: "Advantages 2",
              },
              {
                id: "3",
                title: "Hack 3",
                os: "android",
                description: "Description 3",
                video_url: "https://www.youtube.com/embed/video3",
                advantages: "Advantages 3",
              },
            ],
          },
        })
    );
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  // test("renders select element with options", () => {
  //   render(<PhoneHacks />);
  //   const selectElement = screen.getByRole("combobox");
  //   const options = screen.getAllByRole("option");

  //   expect(selectElement).toBeInTheDocument();
  //   expect(options).toHaveLength(3);
  //   expect(options[0]).toHaveTextContent("All");
  //   expect(options[1]).toHaveTextContent("Android");
  //   expect(options[2]).toHaveTextContent("iPhone");
  // });

  test("filters hacks by selected device", async () => {
    render(<PhoneHacks />);
    const selectElement = screen.getByRole("combobox");

    // Filter hacks by Android
    fireEvent.change(selectElement, { target: { value: "android" } });
    const androidHacks = screen.getAllByRole("listitem");
    expect(androidHacks).toHaveLength(2);
    expect(androidHacks[0]).toHaveTextContent("Hack 1");
    expect(androidHacks[1]).toHaveTextContent("Hack 3");

    // Filter hacks by iPhone
    fireEvent.change(selectElement, { target: { value: "iphone" } });
    const iphoneHacks = screen.getAllByRole("listitem");
    expect(iphoneHacks).toHaveLength(1);
    expect(iphoneHacks[0]).toHaveTextContent("Hack 2");

    // Filter hacks by All
    fireEvent.change(selectElement, { target: { value: "" } });
    const allHacks = screen.getAllByRole("listitem");
    expect(allHacks).toHaveLength(3);
  });

  // test("displays loading animation when filtering hacks", async () => {
  //   render(<PhoneHacks />);
  //   const selectElement = screen.getByRole("combobox");

  //   // Filter hacks by Android
  //   fireEvent.change(selectElement, { target: { value: "android" } });
  //   const loadingAnimation = await screen.findByTestId("loading-animation");
  //   expect(loadingAnimation).toBeInTheDocument();
  // });
});
