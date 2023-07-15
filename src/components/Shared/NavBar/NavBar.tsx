import { Spiral as Hamburger } from "hamburger-react";
import React, { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import ChangeThemes from "../ChangeThemes";
import Logo from "../Logo";
import Cookie from "universal-cookie";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/configureStore";
import { useDispatch } from "react-redux";
import { fetchCart } from "../../../redux/cart/actions";
import getPhones from "../../../redux/phones/actions";
import { PhonesData } from "../../../redux/phones/types";
import { removeFromCart } from "../../../redux/cart/actions";
import getBabyProducts from "../../../redux/babyProducts/actions";
import { BabyProductsData } from "../../../redux/babyProducts/types";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [message, setMessage] = useState({
    appreciation: "",
    success: "",
    error: "",
  });
  const cookies = new Cookie();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const cart = useSelector((state: RootState) => state.cart);
  const phone = useSelector((state: RootState) => state.phones);
  const babyProduct = useSelector((state: RootState) => state.babyProducts);
  const cartArr = cart?.data || [];
  const phonesArr = phone?.data || [];
  const babyProductArr = babyProduct?.data || [];
  const cartArrLength = cartArr.length;
  const userVerified = cookies.get("token");
  const navBarRef = useRef<HTMLDivElement>(null);

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
    if (userVerified) {
      setIsAuthenticated(true);
    }
  }, []);

  // Display cart items and length
  useEffect(() => {
    dispatch(getPhones() as any);
    dispatch(fetchCart() as any);
    dispatch(getBabyProducts() as any);
  }, [dispatch]);

  const filteredCartItem: any = [];
  let totalCart = 0;
  const foundPhonesQuantity: number[] = [];

  if (Array.isArray(phonesArr) || Array.isArray(babyProductArr)) {
    cartArr.forEach((cartItem) => {
      if (cartItem.phone_id) {
        const foundPhone = phonesArr.find(
          (phone) => phone.id === cartItem.phone_id
        );
        if (foundPhone) {
          filteredCartItem.push(foundPhone);
          if (cartItem.phone_quantity) {
            foundPhonesQuantity.push(cartItem.phone_quantity);
            totalCart += foundPhone.amount * cartItem.phone_quantity;
          }
        }
      }
      if (cartItem.baby_product_id) {
        const foundBabyProduct = babyProductArr.find(
          (product) => product.id === cartItem.baby_product_id
        );
        if (foundBabyProduct) {
          filteredCartItem.push(foundBabyProduct);
          if (cartItem.baby_products_quantity) {
            foundPhonesQuantity.push(cartItem.baby_products_quantity);
            totalCart +=
              foundBabyProduct.amount * cartItem.baby_products_quantity;
          }
        }
      }
    });
  }

  // Handle the signout process
  const handleSignOut = async () => {
    if (userVerified) {
      // const token = cookies.get("token");
      try {
        await axios.delete("http://127.0.0.1:5000/users/sign_out", {
          headers: {
            Authorization: userVerified,
          },
        });
      } catch (error) {
        setMessage({
          ...message,
          error:
            "Your account has not signed out. Please check your internet connection and try again!",
        });
        setTimeout(() => {
          setMessage({ ...message, error: "" });
        }, 8000);
      }
      setMessage({
        ...message,
        appreciation: "Thank you for your patronage. Hope to see you soon!",
      });
      setTimeout(() => {
        setMessage({ ...message, appreciation: "" });
      }, 8000);
      setIsAuthenticated(false);
      cookies.remove("token");
      navigate("/");
    }
  };

  const removeFromCartHandler = (phone: PhonesData) => {
    if (userVerified) {
      (dispatch as any)(removeFromCart(phone.id));
      setMessage({ ...message, success: "Phone removed from cart" });
      setTimeout(() => {
        setMessage({ ...message, success: "" });
      }, 3000);
    } else {
      setMessage({
        ...message,
        error: "You have to log in to perfrom this action!",
      });
      setTimeout(() => {
        setMessage({ ...message, error: "" });
      }, 3000);
    }
  };

  // Set setOpen to false when user clicks outside the NavBar
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        navBarRef.current &&
        !navBarRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <nav
      ref={navBarRef}
      className="bg-primary px-2 border-b-2 border-b-line-t fixed w-full flex flex-col z-40"
    >
      {message.appreciation && (
        <div className="toast ease-in-out">
          <div className="alert alert-info">
            <div>
              <span>{message.appreciation}</span>
            </div>
          </div>
          <div className="alert alert-success">
            <div>
              <span>You have signed out successfully!</span>
            </div>
          </div>
        </div>
      )}
      {message.error && (
        <div className="toast toast-top top-10 z-40">
          <p className="alert alert-error">{message.error}</p>
        </div>
      )}
      {message.success && (
        <div className="toast toast-top top-10 z-40">
          <p className="alert alert-success text-xl">{message.success}</p>
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
            <li className="border-r-2 pr-2">
              <NavLink to="/phones">Phones</NavLink>
            </li>
            <li className="border-r-2 pr-2">
              <NavLink to="/technews">News</NavLink>
            </li>
            <li className="border-r-2 pr-2">
              <NavLink to="/phonehacks">Hacks</NavLink>
            </li>
            <li className="border-r-2 pr-2">
              <NavLink to="/babyproducts">Babies</NavLink>
            </li>
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
                {cartArrLength >= 1 ? (
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
                        <span className="badge badge-sm indicator-item">
                          {cartArrLength}
                        </span>
                      </div>
                    </label>
                    <div
                      tabIndex={0}
                      className="mt-3 card card-compact dropdown-content w-[30vw] bg-base-100 shadow"
                    >
                      <div className="card-body">
                        <span className="font-bold text-lg">
                          {cartArrLength} Item(s)
                        </span>
                        {filteredCartItem.map(
                          (item: PhonesData, index: number) => (
                            <div
                              key={item.id}
                              className="flex flex-row border-2 justify-between items-center p-2 rounded-md"
                            >
                              <div>
                                <span className="flex flex-row">
                                  {item.name}: {item.amount}Ghs
                                </span>
                                <span>x {foundPhonesQuantity[index]}</span>{" "}
                              </div>
                              <button
                                className="btn btn-secondary btn-sm"
                                onClick={() => removeFromCartHandler(item)}
                              >
                                Delete
                              </button>
                            </div>
                          )
                        )}
                        <span className="text-info">
                          Subtotal: {totalCart}Ghs
                        </span>
                        <div className="card-actions">
                          <NavLink to="/confirmorder">
                            <button className="btn btn-primary btn-block">
                              Checkout
                            </button>
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
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
                          You have no items in your cart. Please check through
                          our products and add items to your cart.
                        </span>
                      </div>
                    </div>
                  </div>
                )}
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
          <li>
            <NavLink to="/phones" onClick={() => setOpen(false)}>
              Phones
            </NavLink>
          </li>
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
          <li>
            <NavLink to="/babyproducts" onClick={() => setOpen(false)}>
              Baby Products
            </NavLink>
          </li>
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
                {cartArrLength > 0 ? (
                  <NavLink to="/confirmorder">
                    <div className="indicator">
                      <span className="indicator-item badge badge-secondary">
                        {cartArrLength}
                      </span>
                      <button onClick={() => setOpen(false)} className="btn">
                        Cart
                      </button>
                    </div>
                  </NavLink>
                ) : (
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
                          You have no items in your cart. Please check through
                          our products and add items to your cart.
                        </span>
                      </div>
                    </div>
                  </div>
                )}
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
