import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/LandingPage/HomePage";
import Reels from "./components/Reels/Reels";
import PhoneHacks from "./components/PhoneHacks/PhoneHacks";
import TechNews from "./components/TechNews/TechNews";
import ExclusiveItems from "./components/ExclusiveItems/ExclusiveItems";
import SignUpPage from "./components/SignUpPage/SignUpPage";
import SignInPage from "./components/SignInPage/SignInPage";
import NavBarWrapper from "./components/NavBar/NavBarWrapper";

const App = () => (
  <div className="">
    <Router>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <NavBarWrapper>
                <Route path="/" element={<HomePage />} />
                <Route path="/technews" element={<TechNews />} />
                <Route path="/reels" element={<Reels />} />
                <Route path="/phonehacks" element={<PhoneHacks />} />
                <Route path="/exclusiveitems" element={<ExclusiveItems />} />
              </NavBarWrapper>
            }
          />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
        </Routes>
      </main>
    </Router>
  </div>
);

export default App;
