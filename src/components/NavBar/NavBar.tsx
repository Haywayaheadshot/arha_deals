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
    <nav className="bg-primary px-2 border-b-2 border-b-line-t fixed w-full desktop:py-4">
      <div className="flex items-center justify-between desktop:grid desktop:grid-flow-col desktop:justify-stretch desktop:px-10">
        <section className="desktop:hidden">
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
        </section>
        <section className="hidden desktop:flex">
          <ul className="flex flex-row gap-2 py-3">
            <li className="border-r-2 pr-2 flex">
              <NavLink to="/reels">Reels</NavLink>
            </li>
            <li className="border-r-2 pr-2">Phones</li>
            <li className="border-r-2 pr-2">
              <NavLink to="/technews">News</NavLink>
            </li>
            <li className="border-r-2 pr-2">
              <NavLink to="/phonehacks">Hacks</NavLink>
            </li>
            <li className="border-r-2 pr-2">Babies</li>
            <li>
              <NavLink to="/exclusiveitems">Exclusive</NavLink>
            </li>
          </ul>
        </section>
        <NavLink to="/" onClick={() => setOpen(false)}>
          <h1 className="text-xl text-tertiary flex flex-wrap">
            Tailored
            <FaCrown />
            Budget
          </h1>
        </NavLink>
        <span className="px-3 text-tertiary flex desktop:justify-end flex-row">
          <div className="bg-yellow-300 rounded-md px-2 py-1 text-primary desktop:hidden">
            {getTime()}
          </div>
          <ul className="desktop:flex flex-row justify-center items-center gap-2 hidden ">
            <li className="border-r-2 pr-2 flex">
              <NavLink to="/signup">
                <button>Sign Up</button>
              </NavLink>
            </li>
            <li>
              <NavLink to="/signin">
                <button>Sign In</button>
              </NavLink>
            </li>
            <li className="bg-yellow-300 rounded-md px-2 py-1 text-primary">
              {getTime()}
            </li>
          </ul>
        </span>
      </div>
      {open ? (
        <ul className="flex gap-4 fixed bg-primary inset-x-0 border-line-t border-b-2 px-3 py-5 flex-col transition-all ease-in-out delay-500">
          <li>
            <NavLink to="/reels" onClick={() => setOpen(false)}>
              Reels
            </NavLink>
          </li>
          <li>Phones</li>
          <li>
            <NavLink to="/technews" onClick={() => setOpen(false)}>
              Tech News
            </NavLink>
          </li>
          <li>
            <NavLink to="/phonehacks" onClick={() => setOpen(false)}>
              Phone Hacks
            </NavLink>
          </li>
          <li>Baby Products</li>
          <li>
            <NavLink to="/exclusiveitems" onClick={() => setOpen(false)}>
              Exclusive Items
            </NavLink>
          </li>
          <li>
            <NavLink to="/signup" onClick={() => setOpen(false)}>
              <button>Sign Up</button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/signin" onClick={() => setOpen(false)}>
              <button>Sign In</button>
            </NavLink>
          </li>
        </ul>
      ) : null}
    </nav>
  );
};

export default NavBar;
