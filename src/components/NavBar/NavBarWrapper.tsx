import React, { ReactNode } from "react";
import { Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "../Footer/Footer";

interface NavBarWrapperProps {
  children: ReactNode;
}

const NavBarWrapper = ({ children }: NavBarWrapperProps) => {
  return (
    <>
      <NavBar />
      <Routes>{children}</Routes>
      <Footer />
    </>
  );
};

export default NavBarWrapper;
