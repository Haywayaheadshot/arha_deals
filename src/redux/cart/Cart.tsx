import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { CartData } from "./types";
import Cart from "./types";

const initialState: Cart = {
  data: [],
  success: false,
  loading: true,
};

const getCartApi = "http://127.0.0.1:5000/api/carts";

// action creators for display phones
export const getCart = createAsyncThunk("src/redux/cart/getCart", async () => {
  const response = await axios.get<CartData[]>(getCartApi);
  const phones = response.data;
  return phones;
});

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCart.fulfilled, (state, action) => {
      state.data = action.payload;
      state.success = true;
      state.loading = false;
    });
    builder.addCase(getCart.rejected, (state) => {
      state.success = false;
      state.loading = false;
    });
    builder.addCase(getCart.pending, (state) => {
      state.success = false;
      state.loading = true;
    });
  },
});

export default cartSlice.reducer;
