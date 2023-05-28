import React from "react";
import { NavLink } from "react-router-dom";
import { FaCrown } from "react-icons/fa";
import ChangeThemes from "./ChangeThemes";

const Logo = () => {
  return (
    <NavLink to="/" className="flex flex-row gap-2 justify-center items-center">
      <h1 className="text-xl text-secondary flex flex-wrap py-3">
        Tailored
        <FaCrown />
        Budget
      </h1>
      <section className="hidden desktop:flex">
        <ChangeThemes />
      </section>
    </NavLink>
  );
};

export default Logo;
