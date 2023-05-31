import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPhones } from "../../redux/phones/Phones";
import { RootState } from "../../redux/configureStore";
import LoadingAnimation from "../Shared/LoadingAnimation";
import ModalPop from "./ModalPop";

interface Phones {
  id: number;
  name: string;
  amount: number;
  stock: number;
  images_src: [];
  specs: {
    capacity: string;
    body: {
      color: string;
      scratches: string;
      status: string;
      batteryHealth: number;
      screenSize: string;
    };
  };
  condition: string;
  video_src: string;
}

const PhonePage = () => {
  const phones = useSelector((state: RootState) => state.phones);
  const [selectedPhone, setSelectedPhone] = useState<Phones | null>(null);
  const [cartItems, setCartItems] = useState<Phones[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPhones() as any);
  }, [dispatch]);

  const phonesArr = phones.data;

  const openModal = (phone: Phones) => {
    setSelectedPhone(phone);
  };

  const closeModal = () => {
    setSelectedPhone(null);
  };

  const addToCart = (phone: Phones) => {
    setCartItems((prevItems) => [...prevItems, phone]);
  };

  const removeFromCart = (phone: Phones) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== phone.id)
    );
  };

  const isPhoneInCart = (phone: Phones) => {
    return cartItems.some((item) => item.id === phone.id);
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
          {phonesArr.map((phone: Phones) => (
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
