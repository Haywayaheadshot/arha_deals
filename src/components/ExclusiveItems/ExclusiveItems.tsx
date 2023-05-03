import React, { useState } from "react";
import Item from "./Item";
import LoadingAnimation from "../Shared/LoadingAnimation";
import { useSelector } from "react-redux";
import { ExclusiveItemsState } from "../../redux/exclusiveItems/types";

const ExclusiveItems = () => {
  const [showModal, setShowModal] = useState(false);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const items = useSelector((state: ExclusiveItemsState) => state.items.items);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowDetails = () => {
    setShowModal(true);
  };

  return (
    <div className="py-5">
      <section className="pt-10">
        <h1 className="text-3xl text-center">Exclusive Items</h1>
        <p className="px-5 text-center py-3">
          Please note that this section is for collectors and is rearely
          populated. If there is an item, be rest assured the authencity is
          100%.
        </p>
      </section>
      {Array.isArray(items) ? (
        <section className="px-4 flex flex-col justify-center items-center gap-8">
          {items.map((item) => (
            <section
              className="border-tertiary border-2 rounded-md"
              key={item.id}
            >
              <div onClick={() => handleShowDetails()}>
                <ul className="flex flex-row justify-center gap-4 bg-secondary">
                  <li className="bg-yellow-300 rounded-md px-2 py-1 text-primary">
                    {item.itemName}
                  </li>
                  <li className="bg-tertiary rounded-md px-2 py-1 text-primary">
                    {item.availableSince}
                  </li>
                </ul>
                <img src={item.image_url} alt="Gem Stone" />
                <ul className="flex flex-row justify-center gap-4 bg-secondary">
                  <li className="bg-yellow-300 rounded-md px-2 py-1 text-primary">
                    {item.price}
                  </li>
                  <li className="bg-tertiary rounded-md px-2 py-1 text-primary">
                    {item.stock}
                  </li>
                </ul>
              </div>
              <a
                href={`https://api.whatsapp.com/send?phone=+233244041362&text=Hello%2C%0AI%20am%20interested%20in%20buying%20${item.itemName}.%0AIt%20has%20the%20id%3D${item.id}.%0AIt's%20price%20is%20${item.price}.%0A%0APlease%20get%20back%20to%20me%20as%20soon%20as%20you%20can.`}
                target="_blank"
                rel="noreferrer noopener"
              >
                <button
                  type="button"
                  className="text-xl text-center bg-red-200 text-tertiary font-semibold w-full"
                >
                  BUY
                </button>
              </a>
            </section>
          ))}
        </section>
      ) : (
        <LoadingAnimation />
      )}
      {showModal && (
        <div className="fixed bg-secondary top-0 left-0 right-0 flex h-full">
          <div className="p-10 h-full w-full flex justify-center overflow-y-auto snap-y">
            <Item closeModal={handleCloseModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ExclusiveItems;
