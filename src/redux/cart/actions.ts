import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { CartData } from "./types";
import Cookies from "universal-cookie";

const cookies = new Cookies();
const token = cookies.get("token");

axios.defaults.headers.common["Authorization"] = `${token}`;

const addToCartApi = "http://127.0.0.1:5000/api/addtocart";
const removePhoneFromCartApi = "http://127.0.0.1:5000/api/deletephonefromcart";
const fetchCartApi = "http://127.0.0.1:5000/api/carts";
const removeBabyProductFromCartApi =
  "http://127.0.0.1:5000/api/deletebabyproductfromcart";

export const fetchCart = createAsyncThunk("cart/fetchCart", async () => {
  const response = await axios.get<CartData[]>(fetchCartApi);
  const result = response.data;
  return result;
});

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async ({
    phoneId,
    phoneQuantity,
    babyProductId,
    babyProductQuantity,
  }: {
    phoneId: string | number | null;
    phoneQuantity: number | null;
    babyProductId: string | number | null;
    babyProductQuantity: number | null;
  }) => {
    const data = {
      phone_id: phoneId,
      phone_quantity: phoneQuantity,
      baby_product_id: babyProductId,
      baby_products_quantity: babyProductQuantity,
    };
    const response = await axios.post(addToCartApi, data);
    const result = response.data.added;
    return result;
  }
);

export const removePhoneFromCart = createAsyncThunk(
  "cart/removePhoneFromCart",
  async (phoneId: string | number | null) => {
    const data = { phone_id: phoneId };
    axios.delete(removePhoneFromCartApi, { data });
    const result = data.phone_id;
    return result;
  }
);

export const removeBabyProductFromCart = createAsyncThunk(
  "cart/removeBabyProductFromCart",
  async (babyProductId: string | number | null) => {
    const data = { baby_product_id: babyProductId };
    axios.delete(removeBabyProductFromCartApi, { data });
    const result = data.baby_product_id;
    return result;
  }
);
