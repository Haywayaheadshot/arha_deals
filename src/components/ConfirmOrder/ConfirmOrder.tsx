import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchCart } from "../../redux/cart/actions";
import { RootState } from "../../redux/configureStore";
import image1 from "../../assets/apple-phones.png";

const ConfirmOrder = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCart() as any);
  }, [dispatch]);

  console.log(cart);

  return (
    <div className="pt-20 flex flex-col gap-3 items-center">
      <span className="text-3xl px-5 self-start">Shopping Cart</span>
      <table className="table-auto border-[6px] w-[100vw]">
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
          <tr className="border-b-2">
            <td className="flex flex-col gap-3 py-5 pr-5">
              <img src={image1} alt="Test Image" className="px-2 w-[30vw]" />
              <span className="text-2xl pl-3">Iphone5</span>
            </td>
            <td>
              <ul>
                <li>64GB</li>
                <li>Space Grey</li>
                <li className="py-4">Unlocked</li>
              </ul>
            </td>
            <td className="px-2">2000</td>
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
        </tbody>
      </table>
    </div>
  );
};

export default ConfirmOrder;
