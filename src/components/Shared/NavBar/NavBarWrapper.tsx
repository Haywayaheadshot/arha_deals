import React, { ReactNode, useEffect } from "react";
import NavBar from "./NavBar";
import Footer from "../../Footer/Footer";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchCart } from "../../../redux/cart/actions";
// import { getPhones } from "../../../redux/phones/Phones";
// import { RootState } from "../../../redux/configureStore";

interface NavBarWrapperProps {
  children: ReactNode;
  totalCart: number;
  cartArrLength: number;
  filteredCartItem: [];
  foundPhonesQuantity: any;
}

const NavBarWrapper = ({
  children,
  totalCart,
  cartArrLength,
  filteredCartItem,
  foundPhonesQuantity,
}: NavBarWrapperProps) => {
  // const cart = useSelector((state: RootState) => state.cart);
  // const phone = useSelector((state: RootState) => state.phones);
  // const cartArr = cart?.data || [];
  // const phonesArr = phone?.data || [];
  // const dispatch = useDispatch();

  // // Display cart items and length
  // useEffect(() => {
  //   dispatch(getPhones() as any);
  //   dispatch(fetchCart() as any);
  // }, [dispatch]);

  // const cartArrLength = cartArr.length;

  // const filteredCartItem: any = [];
  // let totalCart = 0;
  // const foundPhonesQuantity: number[] = [];

  // if (Array.isArray(phonesArr)) {
  //   cartArr.forEach((cartItem) => {
  //     const foundPhone = phonesArr.find(
  //       (phone) => phone.id === cartItem.phone_id
  //     );
  //     if (foundPhone) {
  //       filteredCartItem.push(foundPhone);
  //       foundPhonesQuantity.push(cartItem.quantity);
  //       totalCart += foundPhone.amount * cartItem.quantity;
  //     }
  //   });
  // }

  return (
    <>
      <NavBar
        totalCart={totalCart}
        cartArrLength={cartArrLength}
        filteredCartItem={filteredCartItem}
        foundPhonesQuantity={foundPhonesQuantity}
      />
      {children}
      <Footer />
    </>
  );
};

export default NavBarWrapper;
