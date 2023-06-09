import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getCart } from "../../redux/cart/Cart";
import { RootState } from "../../redux/configureStore";

const ConfirmOrder = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCart() as any);
  }, [dispatch]);

  console.log(cart);

  return (
    <div className="pt-20">
      <h1>
        If the cart_items table has items it will be mapped here. Else this page
        should not display.
      </h1>
    </div>
  );
};

export default ConfirmOrder;
