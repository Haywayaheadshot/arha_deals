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
    <div className="py-20">
      <h1>Baby Products Cards Go here</h1>
      {babyProductArr.map((product) => (
        <section key={product.id}>
          <span>{product.name}</span>
          {product.specs.map((spec) => (
            <table key={spec[0]}>
              {spec[0]}: {spec[1]}
            </table>
          ))}
        </section>
      ))}
    </div>
  );
};

export default BabyProducts;
