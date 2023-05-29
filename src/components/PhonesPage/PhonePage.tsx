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
        <section className="h-96 carousel carousel-vertical gap-8">
          {phonesArr.map((phone) => (
            <div
              className="shadow-xl border-tertiary border-2 rounded-lg"
              key={phone.id}
            >
              <figure>
                <section className="carousel carousel-center rounded-lg">
                  {phone.images_src.map((image, index) => (
                    <img
                      className="carousel-item"
                      src={image}
                      alt={`${phone.name} portrait`}
                      key={index}
                    />
                  ))}
                </section>
              </figure>
              <div className="card-body bg-yellow-300 text-primary">
                <h2 className="card-title">{phone.name}</h2>
                <span>Available Stock: {phone.stock}</span>
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
