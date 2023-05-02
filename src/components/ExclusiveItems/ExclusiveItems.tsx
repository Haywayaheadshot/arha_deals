import React, { useState } from "react";
import gem from "../../assets/rare_gem.png";
import Item from "./Item";

const ExclusiveItems = () => {
  const [showModal, setShowModal] = useState(false);

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
      <section className="px-4">
        <button
          className="border-tertiary border-2 rounded-md"
          onClick={() => handleShowDetails()}
        >
          <ul className="flex flex-row justify-center gap-4 bg-secondary">
            <li className="bg-yellow-300 rounded-md px-2 py-1 text-primary">
              Item Name
            </li>
            <li className="bg-tertiary rounded-md px-2 py-1 text-primary">
              Time Item Has Been Available
            </li>
          </ul>
          <img src={gem} alt="Gem Stone" />
          <ul className="flex flex-row justify-center gap-4 bg-secondary">
            <li className="bg-yellow-300 rounded-md px-2 py-1 text-primary">
              Price
            </li>
            <li className="bg-tertiary rounded-md px-2 py-1 text-primary">
              Amount Available
            </li>
          </ul>
        </button>
      </section>
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
