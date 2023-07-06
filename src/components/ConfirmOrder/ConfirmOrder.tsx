import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/configureStore";
import { RiDeleteBin3Line } from "react-icons/ri";
import { IconContext } from "react-icons";

const ConfirmOrder = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const phone = useSelector((state: RootState) => state.phones);

  const cartArr = cart?.data;
  const phonesArr = phone?.data;

  const cartItems: any[] = [];
  const cartItemsQuantity: number[] = [];
  let totalCart = 0;

  if (Array.isArray(phonesArr)) {
    cartArr.forEach((cartItem) => {
      const foundPhone = phonesArr.find(
        (phone) => phone.id === cartItem.phone_id
      );
      if (foundPhone) {
        cartItems.push(foundPhone);
        cartItemsQuantity.push(cartItem.quantity);
        totalCart += foundPhone.amount * cartItem.quantity;
      }
    });
  }

  const handleDeleteCartItem = () => {
    console.log("Delete Item");
  };

  return (
    <div className="pt-20 flex flex-row gap-3 items-start justify-center">
      <section>
        <span className="text-3xl px-5 self-start">Shopping Cart</span>
        <span className="self-end px-5">
          You have {cartItems.length} items!
        </span>
        <table className="table-auto border-[6px] w-[100vw] desktop:w-[70vw]">
          <thead>
            <tr className="text-left border-b-2">
              <th className="pl-5 py-2 max-w-[20vw]">Item</th>
              <th>Spec</th>
              <th>Price</th>
              <th>Qty</th>
              <th className="pr-1">Subtotal (GHs)</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <>
                <tr>
                  <td className="flex flex-col gap-3 py-5 pr-5">
                    <img
                      src={item.images_src[0]}
                      alt="Test Image"
                      className="px-2 w-[30vw]"
                    />
                    <span className="text-2xl pl-3">{item.name}</span>
                  </td>
                  <td>
                    <ul>
                      <li>{item.specs.capacity}</li>
                      <li>{item.specs.body.color}</li>
                      <li className="py-4">{item.specs.body.status}</li>
                    </ul>
                  </td>
                  <td className="px-2">{item.amount}</td>
                  <td className="px-2">
                    <label htmlFor="quantity">
                      <input
                        placeholder="1"
                        type="number"
                        id="quantity"
                        className="w-7 pr-3"
                      />
                    </label>
                  </td>
                  <td className="px-2 text-center">2000</td>
                </tr>
                <tr className="border-b-2">
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="flex items-end flex-col">
                    <IconContext.Provider
                      value={{
                        size: "1.5em",
                        className: "global-class-name",
                      }}
                    >
                      <RiDeleteBin3Line onClick={() => handleDeleteCartItem} />
                    </IconContext.Provider>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
        <span className="w-full text-end px-5">
          Cart Total(GHs): {totalCart}
        </span>
      </section>
      <aside className="hidden desktop:flex gap-3 text-primary flex-col bg-box w-[25vw] px-3 py-5 sticky top-10 my-10">
        <span className="text-4xl pb-2 border-b-2 border-b-primary">
          Summary
        </span>
        <span className="text-2xl py-2 border-b-2 border-b-primary">
          Estimated Shipping and Discount
        </span>
        <ul className="flex flex-col gap-5 py-2 border-b-2 border-b-primary">
          <li className="flex flex-row justify-between">
            <span> Subtotal:</span>
            <span> GHs{totalCart}</span>
          </li>
          <li className="flex flex-row justify-between">
            <span> Discount:</span>
            <span> -GHs{totalCart * 0.05}</span>
          </li>
          <li className="flex flex-row justify-between">
            <span> Shipping(Flat rate - Fixed):</span>
            <span> GHs200</span>
          </li>
        </ul>
        <div className="flex flex-row justify-between py-3 text-2xl">
          <span> Order Total</span>
          <span> GHs{totalCart - totalCart * 0.05 + 200}</span>
        </div>
        <button className="bg-yellow-300 py-3 rounded-md">Pay With Card</button>
        <button className="bg-yellow-300 py-3 rounded-md">
          Pay With Mobile Money
        </button>
      </aside>
    </div>
  );
};

export default ConfirmOrder;
