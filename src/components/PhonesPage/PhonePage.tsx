import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import getPhones from "../../redux/phones/actions";
import { RootState } from "../../redux/configureStore";
import LoadingAnimation from "../Shared/LoadingAnimation";
import ModalPop from "./ModalPop";
import { PhonesData } from "../../redux/phones/types";
import { CartData } from "../../redux/cart/types";
import {
  fetchCart,
  addToCart,
  removePhoneFromCart,
} from "../../redux/cart/actions";
import Cookie from "universal-cookie";

const PhonePage = () => {
  const phones = useSelector((state: RootState) => state.phones);
  const cookies = new Cookie();
  const cart = useSelector((state: RootState) => state.cart);
  const [selectedPhone, setSelectedPhone] = useState<PhonesData | null>(null);
  const [message, setMessage] = useState({
    error: "",
    success: "",
  });
  const dispatch = useDispatch();

  const userVerified = cookies.get("token");

  useEffect(() => {
    dispatch(getPhones() as any);
    dispatch(fetchCart() as any);
  }, [dispatch]);

  const phonesArr = phones?.data || [];
  const cartArr: CartData[] = cart?.data || [];

  const openModal = (phone: PhonesData) => {
    setSelectedPhone(phone);
  };

  const closeModal = () => {
    setSelectedPhone(null);
  };

  // Add phone to cart
  const handleAddToCart = (phone: PhonesData, quantity: number) => {
    if (userVerified) {
      if (isPhoneInCartOnLoad(phone)) {
        setMessage({ ...message, error: "This phone is already in your cart" });
        setTimeout(() => {
          setMessage({ ...message, error: "" });
        }, 3000);
      } else {
        dispatch(
          addToCart({
            phoneId: phone.id,
            phoneQuantity: quantity,
            babyProductId: null,
            babyProductQuantity: null,
          }) as any
        );
        setMessage({ ...message, success: "Phone added to cart" });
        setTimeout(() => {
          setMessage({ ...message, success: "" });
        }, 3000);
      }
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

  const isPhoneInCartOnLoad = (phone: PhonesData) => {
    const itemInCart = cartArr.find((item) => item.phone_id === phone.id);
    if (itemInCart) {
      return true; // Return true if itemInCart is found, false otherwise
    }
    return false; // Return false if cartArr is not an array
  };

  // Remove phone from cart
  const removeFromCartHandler = (phone: PhonesData) => {
    if (userVerified) {
      (dispatch as any)(removePhoneFromCart(phone.id));
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

  // Handle quantity and stock
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (
    phone: PhonesData,
    event: { target: { value: string } }
  ) => {
    const newQuantity = parseInt(event.target.value, 10);
    if (newQuantity < 1) {
      setQuantity(1);
      setMessage({ ...message, error: "Quantity cannot be less than 1" });
      setTimeout(() => {
        setMessage({ ...message, error: "" });
      }, 3000);
    } else if (newQuantity > phone.stock) {
      setQuantity(phone.stock);
      setMessage({
        ...message,
        error: "Quantity cannot exceed available stock",
      });
      setTimeout(() => {
        setMessage({ ...message, error: "" });
      }, 3000);
    } else {
      setQuantity(newQuantity);
      setMessage({ ...message, error: "" });
    }
  };

  return (
    <div className="p-5 tablet:px-12">
      <section className="pt-10">
        <h1 className="text-3xl text-center">Phones</h1>
        <p className="px-5 text-center py-3">
          Check out our different range of phones.
        </p>
      </section>
      {message.error && (
        <div className="toast toast-top top-10 z-40">
          <p className="alert alert-error text-xl">{message.error}</p>
        </div>
      )}
      {message.success && (
        <div className="toast toast-top top-10 z-40">
          <p className="alert alert-success text-xl">{message.success}</p>
        </div>
      )}
      {Array.isArray(phonesArr) ? (
        <section className="carousel carousel-vertical gap-8 items-center tablet:flex-row tablet:py-10 tablet:px-5">
          {phonesArr.map((phone: PhonesData) => (
            <div
              className="shadow-lg border-tertiary border-2 rounded-lg max-w-tab-image tablet:max-w-rouselMin hover:shadow-indigo-500/50 hover:scale-105 tablet:ease-in cursor-pointer tablet:duration-300"
              key={phone.id}
            >
              <figure>
                <section className="carousel carousel-center gap-5 px-4 rounded-lg tablet:carousel-vertical tablet:h-96">
                  {phone.images_src.map((image, index) => (
                    <img
                      className="carousel-item max-w-[100%] tablet:py-10"
                      src={image}
                      alt={`${phone.name} portrait`}
                      key={index}
                    />
                  ))}
                  {phone.video_src && (
                    <iframe
                      title="Device video brief"
                      src={phone.video_src}
                      frameBorder="0"
                      allowFullScreen
                      className="carousel-item tablet:pb-5"
                      width="inherit"
                    ></iframe>
                  )}
                </section>
              </figure>
              <div className="card-body bg-yellow-300 text-primary">
                <h2
                  className="card-title underline-offset-4 underline pb-3"
                  onClick={() => openModal(phone)}
                >
                  {phone.name}
                </h2>
                <span>{phone.specs.capacity}</span>
                <section className="flex flex-row justify-between items-center">
                  <span>Stock: {phone.stock} pieces</span>
                  <button className="btn" onClick={() => openModal(phone)}>
                    View More
                  </button>
                </section>
                <div className="card-actions justify-end">
                  {isPhoneInCartOnLoad(phone) ? (
                    <>
                      <button
                        className="btn btn-primary"
                        onClick={() => removeFromCartHandler(phone)}
                      >
                        Remove from Cart
                      </button>
                      <button className="btn bg-secondary" disabled>
                        Add to Cart
                      </button>
                    </>
                  ) : (
                    <div className="flex flex-row justify-center items-center gap-3">
                      <div className="flex flex-row gap-2 text-primary">
                        <label className="label">
                          <span className="label-text text-lg text-primary">
                            Quantity
                          </span>
                        </label>
                        <label className="input-group">
                          <input
                            type="number"
                            placeholder="1"
                            className="input input-bordered w-20 rounded-md bg-black"
                            value={quantity}
                            onChange={(e) => handleQuantityChange(phone, e)}
                          />
                        </label>
                      </div>
                      <button
                        className="btn bg-secondary"
                        onClick={() => handleAddToCart(phone, quantity)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </section>
      ) : (
        <LoadingAnimation />
      )}
      {/* Display selected phone in modal */}
      {selectedPhone && (
        <div className="modal modal-open" id="my-modal-2">
          <ModalPop selectedPhone={selectedPhone} closeModal={closeModal} />
        </div>
      )}
    </div>
  );
};

export default PhonePage;
