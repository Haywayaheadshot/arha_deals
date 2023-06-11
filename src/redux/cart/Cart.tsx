import { createSlice } from "@reduxjs/toolkit";
import Cart from "./types";
import { fetchCart, addToCart, removeFromCart } from "./actions";

const initialState: Cart = {
  data: [],
  success: false,
  loading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCart.fulfilled, (state, action) => {
      state.data = action.payload;
      state.success = true;
      state.loading = false;
    });
    builder.addCase(fetchCart.rejected, (state) => {
      state.success = false;
      state.loading = false;
    });
    builder.addCase(fetchCart.pending, (state) => {
      state.success = false;
      state.loading = true;
    });
    builder.addCase(addToCart.fulfilled, (state, action) => {
      state.data = action.payload;
      state.success = true;
      state.loading = false;
    });
    builder.addCase(addToCart.rejected, (state) => {
      state.success = false;
      state.loading = false;
    });
    builder.addCase(addToCart.pending, (state) => {
      state.success = false;
      state.loading = true;
    });
    builder.addCase(removeFromCart.fulfilled, (state, action) => {
      state.data = action.payload;
      state.success = true;
      state.loading = false;
    });
    builder.addCase(removeFromCart.rejected, (state) => {
      state.success = false;
      state.loading = false;
    });
    builder.addCase(removeFromCart.pending, (state) => {
      state.success = false;
      state.loading = true;
    });
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
