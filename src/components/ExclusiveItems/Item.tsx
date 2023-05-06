import React, { FunctionComponent } from "react";
import { RiEyeCloseLine } from "react-icons/ri";

interface ItemProps {
  closeModal: () => void;
}

const Item: FunctionComponent<ItemProps> = ({ closeModal }) => {
  return (
    <div className="p-10 bg-primary rounded-md h-auto">
      <section className="w-full flex flex-row justify-end">
        <RiEyeCloseLine size={30} onClick={closeModal} />
      </section>
      <section>
        <h1 className="text-4xl text-center" data-testid="item-info">
          Item Name
        </h1>
        <p className="py-3">
          This item is a is a is a is a is a is a is a is a is a is a is a is a
          is a is a is a is a is a is a is a is a is a is a is a is a is a is a
          is a is a is a is a is a is a is a is a is a is a is a is a is a is a
          is a is a is a is a is a is a is a is a is a is a is a. is a is a is a
          is a is a is a is a is a is a is a is a is a is a is a is a is a is a
          is a is a is a is a is a is a is a is a is a is a is a is a is a is a
          is a is a is a is a is a is a is a is a is a is a is a is a is a is a
          is a is a is a is a is a is a is a is a. This item is a is a is a is a
          is a is a is a is a is a is a is a is a is a is a is a is a is a is a
          is a is a is a is a is a is a is a is a is a is a is a is a is a is a
          is a is a is a is a is a is a is a is a is a is a is a is a is a is a
          is a is a is a is a is a.
        </p>
      </section>
    </div>
  );
};

export default Item;
