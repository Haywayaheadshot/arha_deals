import React from "react";
import { NavLink } from "react-router-dom";
import { FaCrown } from "react-icons/fa";
import ChangeThemes from "./ChangeThemes";

const Logo = () => {
  return (
    <span className="flex flex-row gap-2 justify-center items-center">
      <NavLink to="/">
        <h1 className="text-xl text-secondary flex flex-wrap py-3">
          Tailored
          <FaCrown />
          Budget
        </h1>
      </NavLink>
      <section className="hidden desktop:flex">
        <ChangeThemes />
      </section>
    </span>
  );
};

export default Logo;
