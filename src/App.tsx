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
import TechNews from "./components/TechNews/TechNews";

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
