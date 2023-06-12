import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../configureStore";
import { CartData } from "./types";
import Cookies from "universal-cookie";

const cookies = new Cookies();
const token = cookies.get("token");

axios.defaults.headers.common["Authorization"] = `${token}`;

const addToCartApi = "http://127.0.0.1:5000/api/addtocart";
const removeFromCartApi = "http://127.0.0.1:5000/api/deletefromcart";
const fetchCartApi = "http://127.0.0.1:5000/api/carts";

export const fetchCart = createAsyncThunk("cart/fetchCart", async () => {
  const response = await axios.get<CartData[]>(fetchCartApi);
  const result = response.data;
  return result;
});

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (
    { phoneId, quantity }: { phoneId: string | number; quantity: number },
    { getState }
  ) => {
    const state = getState() as RootState;
    const data = { phone_id: phoneId, quantity: quantity };
    const response = await axios.post<CartData[]>(addToCartApi, data);
    const result = response.data;
    return result;
  }
);

export const removeFromCart = createAsyncThunk(
  "cart/removeFromCart",
  async (phoneId: string | number, { getState }) => {
    const state = getState() as RootState;
    const data = { phone_id: phoneId };
    const response = await axios.delete(removeFromCartApi, { data });
    const result = response.data;
    return result;
  }
);
