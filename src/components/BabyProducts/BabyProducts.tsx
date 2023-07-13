import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import getBabyProducts from "../../redux/babyProducts/actions";
import { RootState } from "../../redux/configureStore";

const BabyProducts = () => {
  const babyProduct = useSelector((state: RootState) => state.babyProducts);
  const babyProductArr = babyProduct.data;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBabyProducts() as any);
  }, [dispatch]);

  return (
    <div className="p-5 tablet:px-12">
      <section className="pt-10">
        <h1 className="text-3xl text-center">Baby Products</h1>
        <p className="px-5 text-center py-3">
          A pampered baby is a happy baby. Let us help you pamper your baby.
        </p>
      </section>
      <section className="carousel carousel-vertical gap-8 items-center tablet:flex-row tablet:py-10 tablet:px-5">
        {babyProductArr.map((product) => (
          <div
            key={product.id}
            className="shadow-lg border-tertiary border-2 rounded-lg max-w-tab-image tablet:max-w-rouselMin hover:shadow-indigo-500/50 hover:scale-105 tablet:ease-in cursor-pointer tablet:duration-300"
          >
            <figure>
              <section className="carousel carousel-center gap-5 px-4 rounded-lg tablet:carousel-vertical tablet:h-96">
                {product.images_src.map((image, index) => (
                  <img
                    className="carousel-item max-w-[100%] tablet:py-10"
                    src={image}
                    alt={`${product.name} portrait`}
                    key={index}
                  />
                ))}
                {product.video_src && (
                  <iframe
                    title="Device video brief"
                    src={product.video_src}
                    frameBorder="0"
                    allowFullScreen
                    className="carousel-item tablet:pb-5"
                    width="inherit"
                  ></iframe>
                )}
              </section>
            </figure>
            <div className="card-body bg-yellow-300 text-primary">
              <h2 className="card-title underline-offset-4 underline pb-3">
                {product.name.length > 24
                  ? `${product.name.slice(0, 22)}...`
                  : product.name}
              </h2>
              <span>Condition: {product.condition}</span>
              <section className="flex flex-row justify-between items-center">
                <span>Stock: {product.stock} piece(s)</span>
                <button className="btn">Specs</button>
              </section>
              <div className="card-actions justify-end">
                {/* Show this if item is already in cart */}
                <button className="btn btn-primary">Remove from Cart</button>
                <button className="btn bg-secondary" disabled>
                  Add to Cart
                </button>
                {/* Else show this */}
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
                      />
                    </label>
                  </div>
                  <button className="btn bg-secondary">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default BabyProducts;
