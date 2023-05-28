import { Spiral as Hamburger } from "hamburger-react";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ChangeThemes from "../ChangeThemes";
import Logo from "../Logo";
import Cookie from "universal-cookie";
import axios from "axios";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [appreciation, setAppreciation] = useState("");
  const cookies = new Cookie();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

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

  useEffect(() => {
    // Check if the token cookie is present
    if (cookies.get("token")) {
      setIsAuthenticated(true);
    }
  }, []);

  // Handle the signout process
  const handleSignOut = async () => {
    if (cookies.get("token")) {
      const token = cookies.get("token");
      try {
        await axios.delete("http://127.0.0.1:5000/users/sign_out", {
          headers: {
            Authorization: token,
          },
        });
      } catch (error) {
        // Handle error response or any additional error handling
      }
      // return;
      setAppreciation("Thank you for your patronage. Hope to see you soon!");
      setTimeout(() => {
        setAppreciation("");
      }, 8000);
      setIsAuthenticated(false);
      cookies.remove("token");
    }
  };

  return (
    <nav className="bg-primary px-2 border-b-2 border-b-line-t fixed w-full flex flex-col">
      {appreciation && (
        <div className="toast ease-in-out">
          <div className="alert alert-info">
            <div>
              <span>{appreciation}</span>
            </div>
          </div>
          <div className="alert alert-success">
            <div>
              <span>You have signed out successfully!</span>
            </div>
          </div>
        </div>
      )}
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
        <section className="hidden desktop:flex text-secondary">
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
        <section onClick={() => setOpen(false)}>
          <Logo />
        </section>
        <span className="px-3 text-tertiary flex desktop:justify-end flex-row">
          <div className="bg-yellow-300 rounded-md px-2 py-1 text-primary desktop:hidden">
            {getTime()}
          </div>
          {isAuthenticated ? (
            <ul className="desktop:flex flex-row justify-center items-center gap-2 hidden">
              <li className="border-r-2 pr-2 flex">
                <button onClick={handleSignOut}>Sign Out</button>
              </li>
              <li>
                {/* If carts is not empty, display this */}
                <div className="dropdown dropdown-end">
                  <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <div className="indicator">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      <span className="badge badge-sm indicator-item">8</span>
                    </div>
                  </label>
                  <div
                    tabIndex={0}
                    className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
                  >
                    <NavLink to="/confirmorder">
                      <div className="card-body">
                        <span className="font-bold text-lg">8 Items</span>
                        <span className="text-info">Subtotal: $999</span>
                        <div className="card-actions">
                          <button className="btn btn-primary btn-block">
                            Checkout
                          </button>
                        </div>
                      </div>
                    </NavLink>
                  </div>
                </div>
                {/* Else, display this */}
                <div className="dropdown dropdown-end">
                  <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <div className="indicator">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                  </label>
                  <div
                    tabIndex={0}
                    className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
                  >
                    <div className="card-body">
                      <span className="text-info">
                        You have no items in your cart. Please check through our
                        products and add items to your cart.
                      </span>
                    </div>
                  </div>
                </div>
              </li>
              <li className="bg-yellow-300 rounded-md px-2 py-1 text-primary">
                {getTime()}
              </li>
            </ul>
          ) : (
            <ul className="desktop:flex flex-row justify-center items-center gap-2 hidden">
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
          )}
        </span>
      </div>
      {open ? (
        <ul className="top-11 desktop:hidden flex gap-4 fixed bg-primary text-secondary inset-x-0 border-line-t border-b-2 px-3 py-5 flex-col transition-all ease-in-out delay-500">
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
          {isAuthenticated ? (
            <>
              <li
                onClick={() => {
                  setOpen(false);
                }}
              >
                <button onClick={handleSignOut}>Sign out</button>
              </li>
              <li>
                {/* Display this when cart is not empty */}
                <NavLink to="/confirmorder">
                  <div className="indicator">
                    <span className="indicator-item badge badge-secondary">
                      8
                    </span>
                    <button onClick={() => setOpen(false)} className="btn">
                      Cart
                    </button>
                  </div>
                </NavLink>
                {/* Else display this */}
                <div className="dropdown dropdown-start">
                  <label tabIndex={0} className="btn">
                    <div className="indicator">Cart</div>
                  </label>
                  <div
                    tabIndex={0}
                    className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
                  >
                    <div className="card-body">
                      <span className="text-info">
                        You have no items in your cart. Please check through our
                        products and add items to your cart.
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            </>
          ) : (
            <>
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
            </>
          )}

          <li onClick={() => setOpen(false)}>
            <ChangeThemes />
          </li>
        </ul>
      ) : null}
    </nav>
  );
};

export default NavBar;
