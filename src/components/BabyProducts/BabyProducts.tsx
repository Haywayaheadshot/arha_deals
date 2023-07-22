import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import getBabyProducts from "../../redux/babyProducts/actions";
import { BabyProductsData } from "../../redux/babyProducts/types";
import { RootState } from "../../redux/configureStore";
import ModalPop from "./ModalPop";
import {
  fetchCart,
  addToCart,
  removeBabyProductFromCart,
} from "../../redux/cart/actions";
import Cookie from "universal-cookie";

const BabyProducts = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const cartArr = cart.data;
  const cookies = new Cookie();
  const babyProduct = useSelector((state: RootState) => state.babyProducts);
  const babyProductArr = babyProduct.data;
  const dispatch = useDispatch();
  const [selectedProduct, setSelectedProduct] =
    useState<BabyProductsData | null>(null);

  useEffect(() => {
    dispatch(getBabyProducts() as any);
  }, [dispatch]);

  const [message, setMessage] = useState({
    error: "",
    success: "",
  });

  const openModal = (product: BabyProductsData) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  // Check for baby Product in cart
  const isBabyProductInCartOnLoad = (babyProduct: BabyProductsData) => {
    const itemInCart = cartArr.find(
      (item) => item.baby_product_id === babyProduct.id
    );
    if (itemInCart) {
      return true; // Return true if itemInCart is found, false otherwise
    }
    return false; // Return false if cartArr is not an array
  };

  // Add baby Product to cart
  const userVerified = cookies.get("token");
  const handleAddToCart = (babyProduct: BabyProductsData, quantity: number) => {
    if (userVerified) {
      if (isBabyProductInCartOnLoad(babyProduct)) {
        setMessage({
          ...message,
          error: "This baby product is already in your cart",
        });
        setTimeout(() => {
          setMessage({ ...message, error: "" });
        }, 3000);
      } else {
        dispatch(
          addToCart({
            phoneId: null,
            phoneQuantity: null,
            babyProductId: babyProduct.id,
            babyProductQuantity: quantity,
          }) as any
        );
        setMessage({ ...message, success: "Baby product added to cart" });
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

  // Handle quantity and stock
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (
    babyProduct: BabyProductsData,
    event: { target: { value: string } }
  ) => {
    const newQuantity = parseInt(event.target.value, 10);
    if (newQuantity < 1) {
      setQuantity(1);
      setMessage({ ...message, error: "Quantity cannot be less than 1" });
      setTimeout(() => {
        setMessage({ ...message, error: "" });
      }, 3000);
    } else if (newQuantity > babyProduct.stock) {
      setQuantity(babyProduct.stock);
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

  // Remove baby product from cart
  const removeFromCartHandler = (babyProduct: BabyProductsData) => {
    if (userVerified) {
      (dispatch as any)(removeBabyProductFromCart(babyProduct.id));
      setMessage({ ...message, success: "Baby Product removed from cart" });
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

  return (
    <div className="p-5 tablet:px-12">
      <section className="pt-10">
        <h1 className="text-3xl text-center">Baby Products</h1>
        <p className="px-5 text-center py-3">
          A pampered baby is a happy baby. Let us help you pamper your baby.
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
      <section className="carousel carousel-vertical gap-8 items-center tablet:flex-row tablet:py-10 tablet:px-5">
        {babyProductArr.map((product: BabyProductsData) => (
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
              <section className="flex flex-row gap-10 justify-between items-center">
                <span>Stock: {product.stock} piece(s)</span>
                <button className="btn" onClick={() => openModal(product)}>
                  Specs
                </button>
              </section>
              <div className="card-actions justify-end">
                {isBabyProductInCartOnLoad(product) ? (
                  <>
                    <button
                      className="btn btn-primary"
                      onClick={() => removeFromCartHandler(product)}
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
                      <label
                        className="input-group"
                        htmlFor="baby_product_quantity"
                      >
                        <input
                          id="baby_product_quantity"
                          type="number"
                          placeholder="1"
                          className="input input-bordered w-20 rounded-md bg-black"
                          value={quantity}
                          onChange={(e) => handleQuantityChange(product, e)}
                        />
                      </label>
                    </div>
                    <button
                      className="btn bg-secondary"
                      onClick={() => handleAddToCart(product, quantity)}
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
      {/* Display selected baby product in modal */}
      {selectedProduct && (
        <div className="modal modal-open" id="my-modal-2">
          <ModalPop selectedProduct={selectedProduct} closeModal={closeModal} />
        </div>
      )}
    </div>
  );
};

export default BabyProducts;
