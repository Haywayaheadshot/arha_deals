import React, { ReactNode } from "react";
import NavBar from "./NavBar";
import Footer from "../../Footer/Footer";

interface NavBarWrapperProps {
  children: ReactNode;
}

const NavBarWrapper = ({ children }: NavBarWrapperProps) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default NavBarWrapper;
