import React, { ReactNode, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  RouteProps,
  Routes,
} from "react-router-dom";
import HomePage from "./components/LandingPage/HomePage";
import Reels from "./components/Reels/Reels";
import PhoneHacks from "./components/PhoneHacks/PhoneHacks";
import TechNews from "./components/TechNews/TechNews";
import ExclusiveItems from "./components/ExclusiveItems/ExclusiveItems";
import SignUpPage from "./components/SignUpPage/SignUpPage";
import SignInPage from "./components/SignInPage/SignInPage";
import NavBarWrapper from "./components/Shared/NavBar/NavBarWrapper";
import ConfirmOrder from "./components/ConfirmOrder/ConfirmOrder";
import PhonePage from "./components/PhonesPage/PhonePage";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchCart } from "./redux/cart/actions";
import { getPhones } from "./redux/phones/Phones";
import { RootState } from "./redux/configureStore";

const App = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const phone = useSelector((state: RootState) => state.phones);
  const cartArr = cart?.data || [];
  const phonesArr = phone?.data || [];
  const dispatch = useDispatch();

  // Display cart items and length
  useEffect(() => {
    dispatch(getPhones() as any);
    dispatch(fetchCart() as any);
  }, [dispatch]);

  const cartArrLength = cartArr.length;

  const filteredCartItem: any = [];
  let totalCart = 0;
  const foundPhonesQuantity: number[] = [];

  if (Array.isArray(phonesArr)) {
    cartArr.forEach((cartItem) => {
      const foundPhone = phonesArr.find(
        (phone) => phone.id === cartItem.phone_id
      );
      if (foundPhone) {
        filteredCartItem.push(foundPhone);
        foundPhonesQuantity.push(cartItem.quantity);
        totalCart += foundPhone.amount * cartItem.quantity;
      }
    });
  }

  return (
    <div className="">
      <Router>
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <NavBarWrapper
                  totalCart={totalCart}
                  cartArrLength={cartArrLength}
                  filteredCartItem={filteredCartItem}
                  foundPhonesQuantity={foundPhonesQuantity}
                >
                  <HomePage />
                </NavBarWrapper>
              }
              {...(exactProp as RouteProps)}
            />
            <Route
              path="/technews"
              element={
                <NavBarWrapper
                  totalCart={totalCart}
                  cartArrLength={cartArrLength}
                  filteredCartItem={filteredCartItem}
                  foundPhonesQuantity={foundPhonesQuantity}
                >
                  <TechNews />
                </NavBarWrapper>
              }
              {...(exactProp as RouteProps)}
            />
            <Route
              path="/reels"
              element={
                <NavBarWrapper
                  totalCart={totalCart}
                  cartArrLength={cartArrLength}
                  filteredCartItem={filteredCartItem}
                  foundPhonesQuantity={foundPhonesQuantity}
                >
                  <Reels />
                </NavBarWrapper>
              }
              {...(exactProp as RouteProps)}
            />
            <Route
              path="/phonehacks"
              element={
                <NavBarWrapper
                  totalCart={totalCart}
                  cartArrLength={cartArrLength}
                  filteredCartItem={filteredCartItem}
                  foundPhonesQuantity={foundPhonesQuantity}
                >
                  <PhoneHacks />
                </NavBarWrapper>
              }
              {...(exactProp as RouteProps)}
            />
            <Route
              path="/exclusiveitems"
              element={
                <NavBarWrapper
                  totalCart={totalCart}
                  cartArrLength={cartArrLength}
                  filteredCartItem={filteredCartItem}
                  foundPhonesQuantity={foundPhonesQuantity}
                >
                  <ExclusiveItems />
                </NavBarWrapper>
              }
              {...(exactProp as RouteProps)}
            />
            <Route
              path="/confirmorder"
              element={
                <NavBarWrapper
                  totalCart={totalCart}
                  cartArrLength={cartArrLength}
                  filteredCartItem={filteredCartItem}
                  foundPhonesQuantity={foundPhonesQuantity}
                >
                  <ConfirmOrder />
                </NavBarWrapper>
              }
              {...(exactProp as RouteProps)}
            />
            <Route
              path="/phones"
              element={
                <NavBarWrapper
                  totalCart={totalCart}
                  cartArrLength={cartArrLength}
                  filteredCartItem={filteredCartItem}
                  foundPhonesQuantity={foundPhonesQuantity}
                >
                  <PhonePage />
                </NavBarWrapper>
              }
              {...(exactProp as RouteProps)}
            />
            <Route
              path="/signup"
              element={<SignUpPage />}
              {...(exactProp as RouteProps)}
            />
            <Route
              path="/signin"
              element={<SignInPage />}
              {...(exactProp as RouteProps)}
            />
          </Routes>
        </main>
      </Router>
    </div>
  );
};

const exactProp = { exact: true };

export default App;
