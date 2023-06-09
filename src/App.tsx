import React, { ReactNode } from "react";
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
import BabyProducts from "./components/BabyProducts/BabyProducts";

const App = () => {
  return (
    <div className="">
      <Router>
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <NavBarWrapper>
                  <HomePage />
                </NavBarWrapper>
              }
              {...(exactProp as RouteProps)}
            />
            <Route
              path="/technews"
              element={
                <NavBarWrapper>
                  <TechNews />
                </NavBarWrapper>
              }
              {...(exactProp as RouteProps)}
            />
            <Route
              path="/reels"
              element={
                <NavBarWrapper>
                  <Reels />
                </NavBarWrapper>
              }
              {...(exactProp as RouteProps)}
            />
            <Route
              path="/phonehacks"
              element={
                <NavBarWrapper>
                  <PhoneHacks />
                </NavBarWrapper>
              }
              {...(exactProp as RouteProps)}
            />
            <Route
              path="/exclusiveitems"
              element={
                <NavBarWrapper>
                  <ExclusiveItems />
                </NavBarWrapper>
              }
              {...(exactProp as RouteProps)}
            />
            <Route
              path="/confirmorder"
              element={
                <NavBarWrapper>
                  <ConfirmOrder />
                </NavBarWrapper>
              }
              {...(exactProp as RouteProps)}
            />
            <Route
              path="/phones"
              element={
                <NavBarWrapper>
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
            <Route
              path="/babyproducts"
              element={
                <NavBarWrapper>
                  <BabyProducts />
                </NavBarWrapper>
              }
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
