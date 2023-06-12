import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPhones } from "../../redux/phones/Phones";
import { RootState } from "../../redux/configureStore";
import LoadingAnimation from "../Shared/LoadingAnimation";
import ModalPop from "./ModalPop";
import { PhonesData } from "../../redux/phones/types";
import { CartData } from "../../redux/cart/types";
import { fetchCart, addToCart, removeFromCart } from "../../redux/cart/actions";

const PhonePage = () => {
  const phones = useSelector((state: RootState) => state.phones);
  const cart = useSelector((state: RootState) => state.cart);
  const [selectedPhone, setSelectedPhone] = useState<PhonesData | null>(null);
  const [message, setMessage] = useState({
    error: "",
    success: "",
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPhones() as any);
    dispatch(fetchCart() as any);
  }, [dispatch]);

  const phonesArr = phones.data;
  const cartArr: CartData[] = cart.data;

  const openModal = (phone: PhonesData) => {
    setSelectedPhone(phone);
  };

  const closeModal = () => {
    setSelectedPhone(null);
  };

  const handleAddToCart = async (phone: PhonesData, quantity: number) => {
    try {
      const result = await (dispatch as any)(
        addToCart({ phoneId: phone.id, quantity })
      );
      if (result.payload) {
        setMessage({ ...message, success: result.payload.message });
        setTimeout(() => {
          setMessage({ ...message, success: "" });
        }, 3000);
      } else {
        setMessage({ ...message, error: "Failed to add item to cart" });
        setTimeout(() => {
          setMessage({ ...message, error: "" });
        }, 3000);
      }
      window.location.reload();
    } catch (error) {
      setMessage({ ...message, error: "Failed to add item to cart" });
      setTimeout(() => {
        setMessage({ ...message, error: "" });
      }, 3000);
    }
  };

  const handleRemoveFromCart = async (phone: PhonesData) => {
    try {
      const result = await dispatch(removeFromCart(phone.id) as any);
      if (result.payload) {
        setMessage({ ...message, success: result.payload.message });
        setTimeout(() => {
          setMessage({ ...message, success: "" });
        }, 3000);
        window.location.reload();
      } else {
        setMessage({ ...message, error: "Failed to remove item from cart" });
        setTimeout(() => {
          setMessage({ ...message, error: "" });
        }, 3000);
      }
    } catch (error) {
      setMessage({
        ...message,
        error:
          "The item has not been removed from your cart. Please check your internet connection and try again!",
      });
      setTimeout(() => {
        setMessage({ ...message, error: "" });
      }, 3000);
    }
  };

  const isPhoneInCart = (phone: PhonesData) => {
    return (
      cartArr.length > 0 && cartArr.some((item) => item.phone_id === phone.id)
    );
  };

  const addToCartHandler = (phone: PhonesData, quantity: number) => {
    if (!isPhoneInCart(phone)) {
      handleAddToCart(phone, quantity);
      return;
    }
    setMessage({ ...message, error: "This phone is already in your cart" });
    setTimeout(() => {
      setMessage({ ...message, error: "" });
    }, 3000);
  };

  const removeFromCartHandler = (phone: PhonesData) => {
    if (isPhoneInCart(phone)) {
      handleRemoveFromCart(phone);
      return;
    }
    setMessage({ ...message, error: "This item is not in your cart" });
    setTimeout(() => {
      setMessage({ ...message, error: "" });
    }, 3000);
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
    <div className="p-5">
      <section className="pt-10">
        <h1 className="text-3xl text-center">Phones</h1>
        <p className="px-5 text-center py-3">
          Check out our different range of phones.
        </p>
      </section>
      {Array.isArray(phonesArr) ? (
        <section className="carousel carousel-vertical gap-8 items-center">
          {phonesArr.map((phone: PhonesData) => (
            <div
              className="shadow-xl border-tertiary border-2 rounded-lg max-w-tab-image"
              key={phone.id}
            >
              <figure>
                <section className="carousel carousel-center gap-5 px-4 rounded-lg">
                  {phone.images_src.map((image, index) => (
                    <img
                      className="carousel-item max-w-[100%]"
                      src={image}
                      alt={`${phone.name} portrait`}
                      key={index}
                    />
                  ))}
                  <iframe
                    title="Device video brief"
                    src={phone.video_src}
                    frameBorder="0"
                    allowFullScreen
                    className="carousel-item"
                    width="inherit"
                  ></iframe>
                </section>
              </figure>
              <div className="card-body bg-yellow-300 text-primary">
                <h2 className="card-title">{phone.name}</h2>
                <span>{phone.specs.capacity}</span>
                <section className="flex flex-row justify-between items-center">
                  <span>Stock: {phone.stock} pieces</span>
                  <button className="btn" onClick={() => openModal(phone)}>
                    View More
                  </button>
                </section>
                <div className="card-actions justify-end">
                  {isPhoneInCart(phone) ? (
                    <button
                      className="btn btn-primary"
                      onClick={() => removeFromCartHandler(phone)}
                    >
                      Remove from Cart
                    </button>
                  ) : (
                    <>
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
                        onClick={() => addToCartHandler(phone, quantity)}
                      >
                        Add to Cart
                      </button>
                    </>
                  )}
                </div>
                {message.error && (
                  <div className="toast toast-top">
                    <p className="alert alert-error">{message.error}</p>
                  </div>
                )}
                {message.success && (
                  <div className="toast toast-top toast-center w-full px-[10vw]">
                    <p className="alert alert-success text-xl">
                      {message.success}
                    </p>
                  </div>
                )}
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
