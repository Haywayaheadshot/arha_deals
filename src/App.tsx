import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  RouteProps,
} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/LandingPage/HomePage";
import NavBar from "./components/NavBar/NavBar";
import Reels from "./components/Reels/Reels";
import PhoneHacks from "./components/PhoneHacks/PhoneHacks";
import TechNews from "./components/TechNews/TechNews";
import ExclusiveItems from "./components/ExclusiveItems/ExclusiveItems";

const App = () => (
  <div className="">
    <Router>
      <header>
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
            {...(exactProp as RouteProps)}
          />
          <Route
            path="/technews"
            element={<TechNews />}
            {...(exactProp as RouteProps)}
          />
          <Route
            path="/reels"
            element={<Reels />}
            {...(exactProp as RouteProps)}
          />
          <Route
            path="/phonehacks"
            element={<PhoneHacks />}
            {...(exactProp as RouteProps)}
          />
          <Route
            path="/exclusiveitems"
            element={<ExclusiveItems />}
            {...(exactProp as RouteProps)}
          />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </Router>
  </div>
);

const exactProp = { exact: true };

export default App;
