import { Spiral as Hamburger } from "hamburger-react";
import React, { useEffect, useState } from "react";
import { FaCrown } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const getTime = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
      const intervalId = setInterval(() => {
        setTime(new Date());
      }, 1000);
      return () => clearInterval(intervalId);
    }, []);

    const hours = time.toLocaleString("en-US", {
      hour: "numeric",
      hour12: false,
    });
    const minutes = time.getMinutes().toString().padStart(2, "0");
    const seconds = time.getSeconds().toString().padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <nav className="bg-primary px-2 border-b-2 border-b-line-t fixed w-full">
      <div className="flex items-center justify-between">
        <Hamburger
          direction="right"
          easing="ease-in"
          label="Show menu"
          distance="lg"
          toggled={open}
          size={20}
          toggle={setOpen}
          color="#484848"
        />
        <NavLink to="/" onClick={() => setOpen(false)}>
          <h1 className="text-xl text-tertiary flex">
            Tailored
            <FaCrown />
            Budget
          </h1>
        </NavLink>
        <span className="px-3 text-tertiary">{getTime()}</span>
      </div>
      {open ? (
        <ul className="flex gap-4 fixed bg-primary inset-x-0 border-line-t border-b-2 px-3 py-5 flex-col transition-all ease-in-out delay-500">
          <li>New Stock</li>
          <NavLink to="/technews" onClick={() => setOpen(false)}>
            <li>Tech News</li>
          </NavLink>
          <li>Smart Hacks</li>
        </ul>
      ) : null}
    </nav>
  );
};

export default NavBar;
