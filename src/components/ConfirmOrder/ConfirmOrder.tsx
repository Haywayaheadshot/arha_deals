import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/configureStore";
import { RiDeleteBin3Line } from "react-icons/ri";
import { IconContext } from "react-icons";
import { removeFromCart } from "../../redux/cart/actions";
import { PhonesData } from "../../redux/phones/types";
import Cookies from "universal-cookie";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

const ConfirmOrder = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const phone = useSelector((state: RootState) => state.phones);
  const cookie = new Cookies();
  const userVerified = cookie.get("token");
  const dispatch = useDispatch();
  const [message, setMessage] = useState({
    success: "",
    error: "",
  });

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

  // Remove phone from cart
  const removeFromCartHandler = (phone: PhonesData) => {
    if (userVerified) {
      (dispatch as any)(removeFromCart(phone.id));
      setMessage({ ...message, success: "Phone removed from cart" });
      setTimeout(() => {
        setMessage({ ...message, success: "" });
      }, 3000);
    } else {
      setMessage({
        ...message,
        error: "You have to log in to perfrom this action!",
      });
      setTimeout(() => {
        setMessage({ ...message, error: "" });
      }, 3000);
    }
  };

  return (
    <div className="pt-20 flex flex-row gap-3 items-start justify-center">
      {message.error && (
        <div className="toast toast-top top-10 z-40">
          <p className="alert alert-error text-xl">{message.error}</p>
        </div>
      )}
      {message.success && (
        <div className="toast toast-top top-10 z-40">
          <p className="alert alert-success text-xl">{message.success}</p>
        </div>
      )}
      {cartItems.length > 0 ? (
        <>
          <section className="flex flex-col">
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
                {cartItems?.map((item: PhonesData, index) => (
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
                      <td className="px-2">
                        <span className="border-2 px-2 py-1 rounded-md">
                          {item.amount}
                        </span>
                      </td>
                      <td className="px-2">
                        <label htmlFor="quantity">
                          <span className="border-2 px-2 py-1 rounded-md">
                            {cartItemsQuantity[index]}
                          </span>
                        </label>
                      </td>
                      <td className="px-2 text-center">
                        <span className="border-2 px-2 py-1 rounded-md">
                          {item.amount * cartItemsQuantity[index]}
                        </span>
                      </td>
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
                            className: "global-class-name cursor-pointer",
                          }}
                        >
                          <RiDeleteBin3Line
                            onClick={() => removeFromCartHandler(item)}
                          />
                        </IconContext.Provider>
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
            <section className="px-5 flex flex-col desktop:hidden">
              <span className="text-xl py-2">Summary</span>
              <ul className="flex flex-col gap-5 py-2 border-b-2 border-b-primary">
                <li className="flex flex-row justify-between border-b-2 pb-2">
                  <span> Cart total:</span>
                  <span> GHs{totalCart}</span>
                </li>
                <li className="flex flex-row justify-between border-b-2 pb-2">
                  <span> Discount:</span>
                  <span> -GHs{totalCart * 0.05}</span>
                </li>
                <li className="flex flex-row justify-between border-b-2 pb-2">
                  <span> Shipping(Flat rate - Fixed):</span>
                  <span> GHs200</span>
                </li>
                <li className="flex flex-row justify-between py-3 text-2xl">
                  <span> Order Total</span>
                  <span> GHs{totalCart - totalCart * 0.05 + 200}</span>
                </li>
                <li className="flex flex-col gap-2 text-primary">
                  <button className="bg-yellow-300 py-3 rounded-md">
                    Pay With Card
                  </button>
                  <button className="bg-yellow-300 py-3 rounded-md">
                    Pay With Mobile Money
                  </button>
                </li>
              </ul>
            </section>
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
                <span> Cart total:</span>
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
            <button className="bg-yellow-300 py-3 rounded-md">
              Pay With Card
            </button>
            <button className="bg-yellow-300 py-3 rounded-md">
              Pay With Mobile Money
            </button>
          </aside>
        </>
      ) : (
        <section className="flex flex-col">
          <span className="text-3xl px-5 self-start">Shopping Cart</span>
          <span className="self-end px-5">
            You have {cartItems.length} items!
          </span>
          <p className=" text-center text-2xl px-5 py-8">
            Please visit our pages for{" "}
            <NavLink
              to="/babyproducts"
              className="underline-offset-8 underline"
            >
              babies
            </NavLink>{" "}
            and{" "}
            <NavLink to="/phones" className="underline-offset-8 underline">
              phones
            </NavLink>{" "}
            to add items to your cart
          </p>
        </section>
      )}
    </div>
  );
};

export default ConfirmOrder;
