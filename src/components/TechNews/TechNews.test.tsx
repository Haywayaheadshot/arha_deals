import React from "react";
import { render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import store from "../../redux/configureStore";
import TechNews from "./TechNews";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import "@testing-library/jest-dom";

const mockNews = [
  {
    id: 1,
    title: "Mock News 1",
    imageUrl: "https://example.com/image1.jpg",
    content: "Mock content 1",
    readMoreUrl: "https://example.com/article1",
  },
  {
    id: 2,
    title: "Mock News 2",
    imageUrl: "https://example.com/image2.jpg",
    content: "Mock content 2",
    readMoreUrl: "https://example.com/article2",
  },
];

jest.mock("react-redux", () => ({
  useSelector: jest.fn().mockImplementation((selector) =>
    selector({
      news: {
        data: mockNews,
        loading: false,
      },
    })
  ),
  useDispatch: jest.fn().mockReturnValue((action: any) => {
    return store.dispatch(action);
  }),
}));

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

test("renders TechNews without crashing", () => {
  render(
    <Router>
      <TechNews />
    </Router>
  );
});

test("displays correct title", () => {
  const { getByText } = render(<TechNews />);
  const title = getByText("Welcome to the Tech News Page.");
  expect(title).toBeInTheDocument();
});

describe("Tech news component", () => {
  test("displays news articles", async () => {
    mockedAxios.get.mockResolvedValueOnce({
      data: [
        { title: "Mock News 1", content: "Mock content 1" },
        { title: "Mock News 2", content: "Mock content 2" },
      ],
    });

    const { getByText } = render(
      <Router>
        <TechNews />
      </Router>
    );

    const news1 = await waitFor(() => getByText("Mock News 1"));
    const news2 = await waitFor(() => getByText("Mock News 2"));

    expect(news1).toBeInTheDocument();
    expect(news2).toBeInTheDocument();
  });
});
