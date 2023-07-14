import React from "react";
import { BabyProductsData } from "../../redux/babyProducts/types";

interface ModalPopProps {
  selectedProduct: BabyProductsData;
  closeModal: () => void;
}

const ModalPop = ({ selectedProduct, closeModal }: ModalPopProps) => {
  return (
    <div className="modal-box flex flex-col bg-secondary text-primary desktop:min-w-rousel">
      <section className="flex flex-col gap-5 desktop:flex-row justify-between pr-5 pb-4 text-2xl">
        <span>{selectedProduct.name}</span>
        <span>Price(Ghs): {selectedProduct.amount}</span>
      </section>
      <section className="flex flex-col desktop:flex-row gap-2">
        <div className="flex flex-col gap-5 desktop:max-w-mid">
          <div className="carousel max-w-rousel">
            {selectedProduct.images_src.map((src, index) => (
              <div
                id={`slide${index + 1}`}
                className="carousel-item relative w-full"
                key={index}
              >
                <img
                  src={src}
                  className="w-full"
                  alt={`Test Image ${index + 1}`}
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a
                    href={`#slide${
                      index === 0 ? selectedProduct.images_src.length : index
                    }`}
                    className="btn btn-circle"
                  >
                    ❮
                  </a>
                  <a
                    href={`#slide${
                      (index + 2) % (selectedProduct.images_src.length + 1)
                    }`}
                    className="btn btn-circle"
                  >
                    ❯
                  </a>
                </div>
              </div>
            ))}
          </div>
          {selectedProduct.video_src !== "" && (
            <iframe
              title="Device video brief"
              src={selectedProduct.video_src}
              frameBorder="0"
              allowFullScreen
              className="carousel-item"
              width="inherit"
            ></iframe>
          )}
        </div>
        <div className="flex flex-col justify-start">
          {selectedProduct.specs.length !== 0 && (
            <section className="flex flex-col w-full py-3 px-5 gap-3">
              <span className="2xl underline underline-offset-8">SPECS</span>
              <table className="table-fixed">
                <thead>
                  <tr>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {selectedProduct.specs.map((spec, index) => (
                    <tr key={index} className="border-x-2 border-t-2">
                      <td className="border-r-2 border-b-2 px-2">{spec[0]}</td>
                      <td className="border-b-2 px-2">{spec[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          )}
          {selectedProduct.features.length !== 0 && (
            <section className="flex flex-col w-full py-3 px-5 gap-3">
              <span className="2xl underline underline-offset-8">FEATURES</span>
              <ul className="list-disc">
                {selectedProduct.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </section>
          )}
          {selectedProduct.productHightlights.length !== 0 && (
            <section className="flex flex-col w-full py-3 px-5 gap-3">
              <span className="2xl underline underline-offset-8">
                HIGHLIGHTS
              </span>
              <ul className="list-disc">
                {selectedProduct.productHightlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </section>
          )}
          {selectedProduct.condition !== "" && (
            <section className="flex flex-col w-full py-2 px-5 gap-3">
              <span className="2xl underline underline-offset-8">
                CONDITION
              </span>
              <span>{selectedProduct.condition}</span>
            </section>
          )}
          {selectedProduct.stock !== null ? (
            <section className="flex flex-col w-full py-2 px-5 gap-3">
              <span className="2xl underline underline-offset-8">STOCK</span>
              <span>{selectedProduct.stock} piece(s)</span>
            </section>
          ) : (
            <span className="text-3xl">
              We are currently updating our inventory. Please check back later!
            </span>
          )}
        </div>
      </section>
      <div className="modal-action sticky down-0">
        <button className="btn" onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ModalPop;
