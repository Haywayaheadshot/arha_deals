import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPhones } from "../../redux/phones/Phones";
import { RootState } from "../../redux/configureStore";
import LoadingAnimation from "../Shared/LoadingAnimation";
import ModalPop from "./ModalPop";
import { PhonesData } from "../../redux/phones/types";
import Cookie from "universal-cookie";

const PhonePage = () => {
  const phones = useSelector((state: RootState) => state.phones);
  const [selectedPhone, setSelectedPhone] = useState<PhonesData | null>(null);
  const [cartItems, setCartItems] = useState<PhonesData[]>([]);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const cookies = new Cookie();

  useEffect(() => {
    dispatch(getPhones() as any);
  }, [dispatch]);

  const phonesArr = phones.data;

  const openModal = (phone: PhonesData) => {
    setSelectedPhone(phone);
  };

  const closeModal = () => {
    setSelectedPhone(null);
  };

  const addToCart = (phone: PhonesData) => {
    if (cookies.get("token")) {
      const token = cookies.get("token");
      setCartItems((prevItems) => [...prevItems, phone]);
      const data = {
        phone_id: phone.id,
      };
      const options = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
          Authorization: `${token}`,
        },
        body: JSON.stringify(data),
      };
      const url = "http://127.0.0.1:5000/api/addtocart";
      fetch(url, options)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.status === 201) {
            // handle success
            console.log(data.message);
          } else {
            // handle error
            console.log(data);
          }
        });
      return;
    }
    setErrorMessage("You must have an account in order to perform this action");
    setTimeout(() => {
      setErrorMessage("");
    }, 3000);
  };

  const removeFromCart = (phone: PhonesData) => {
    if (cookies.get("token")) {
      setCartItems((prevItems) =>
        prevItems.filter((item) => item.id !== phone.id)
      );
      return;
    }
  };

  const isPhoneInCart = (phone: PhonesData) => {
    if (cookies.get("token")) {
      return cartItems.some((item) => item.id === phone.id);
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
                      onClick={() => removeFromCart(phone)}
                    >
                      Remove from Cart
                    </button>
                  ) : (
                    <button
                      className="btn bg-secondary"
                      onClick={() => addToCart(phone)}
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
                {errorMessage && (
                  <div className="toast toast-top">
                    <p className="alert alert-error">{errorMessage}</p>
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
