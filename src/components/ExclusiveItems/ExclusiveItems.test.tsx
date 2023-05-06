import React from "react";
import { Provider } from "react-redux";
import { fireEvent, render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import ExclusiveItems from "./ExclusiveItems";
import { Store, AnyAction } from "redux";
import { create } from "react-test-renderer";
import "@testing-library/jest-dom";

const mockStore = configureStore([]);

describe("ExclusiveItems", () => {
  let store: Store<unknown, AnyAction>;
  let component: renderer.ReactTestRenderer;

  beforeEach(() => {
    store = mockStore({
      items: {
        items: [
          {
            id: "1",
            itemName: "item 1",
            availableSince: "2022-05-01",
            image_url: "https://example.com/image1.jpg",
            price: "100",
            stock: "10",
          },
          {
            id: "2",
            itemName: "item 2",
            availableSince: "2022-05-02",
            image_url: "https://example.com/image2.jpg",
            price: "200",
            stock: "20",
          },
        ],
      },
    });

    component = create(
      <Provider store={store}>
        <ExclusiveItems />
      </Provider>
    );
  });

  it("should render correctly", () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

  it("should display the item name, available since date, image, price, and stock", () => {
    render(
      <Provider store={store}>
        <ExclusiveItems />
      </Provider>
    );

    expect(screen.getByText("item 1")).toBeInTheDocument();
    expect(screen.getByText("2022-05-01")).toBeInTheDocument();
    // expect(
    //   screen.getByRole("img", { name: `Image of ${items.itemName}` })
    // ).toBeInTheDocument();
    expect(screen.getByText("100")).toBeInTheDocument();
    expect(screen.getByText("10")).toBeInTheDocument();

    expect(screen.getByText("item 2")).toBeInTheDocument();
    expect(screen.getByText("2022-05-02")).toBeInTheDocument();
    // expect(screen.getAllByAltText("Image of item 1")[1]).toBeInTheDocument();
    expect(screen.getByText("200")).toBeInTheDocument();
    expect(screen.getByText("20")).toBeInTheDocument();
  });

  // it("should open the modal when an item is clicked", () => {
  //   const spy = jest.spyOn(window, "open");
  //   render(
  //     <Provider store={store}>
  //       <ExclusiveItems />
  //     </Provider>
  //   );

  //   // expect(screen.queryByTestId("item-info")).not.toBeInTheDocument();
  //   // screen.getByText("item 1").click();
  //   // expect(screen.getByText("Item Description")).toBeInTheDocument();

  //   fireEvent.click(screen.getByText("BUY"));
  //   expect(spy).toHaveBeenCalledWith(
  //     "https://api.whatsapp.com/send?phone=+233244041362&text=Hello%2C%0AI%20am%20interested%20in%20buying%20${item.itemName}.%0AIt%20has%20the%20id%3D${item.id}.%0AIt's%20price%20is%20${item.price}.%0A%0APlease%20get%20back%20to%20me%20as%20soon%20as%20you%20can."
  //   );
  //   spy.mockRestore();
  // });
});
