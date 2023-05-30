import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPhones } from "../../redux/phones/Phones";
import { RootState } from "../../redux/configureStore";
import LoadingAnimation from "../Shared/LoadingAnimation";

const PhonePage = () => {
  const phones = useSelector((state: RootState) => state.phones);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPhones() as any);
  }, [dispatch]);

  const phonesArr = phones.data;

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
          {phonesArr.map((phone) => (
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
                  <a href="#my-modal-2" className="btn">
                    View More
                  </a>
                  <div className="modal" id="my-modal-2">
                    <div className="modal-box bg-secondary">
                      <h3 className="font-bold text-lg">
                        This {phone.name} device has the following specs.
                      </h3>
                      <ul className="py-4">
                        <li>Phone Size: {phone.specs.capacity}</li>
                        <li>Price: {phone.amount} Cedis</li>
                        <li>Color: {phone.specs.body.color}</li>
                        <li>Fault: {phone.specs.body.scratches}</li>
                        <li>Status: {phone.specs.body.status}</li>
                      </ul>
                      <span>
                        Please note that this is a {phone.condition} phone
                      </span>
                      <div className="modal-action">
                        <a href="#" className="btn">
                          Close
                        </a>
                      </div>
                    </div>
                  </div>
                </section>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Add To Cart</button>
                </div>
              </div>
            </div>
          ))}
        </section>
      ) : (
        <LoadingAnimation />
      )}
    </div>
  );
};

export default PhonePage;
