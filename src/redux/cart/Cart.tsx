import { createSlice } from "@reduxjs/toolkit";
import { fetchCart, addToCart, removeFromCart } from "./actions";
import { CartData } from "./types";
import { Draft } from "immer";

interface CartState {
  data: Draft<CartData>[]; // Update the type to Draft<CartData>[]
  success: boolean;
  loading: boolean;
}

const initialState: CartState = {
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
      state.data = action.payload as Draft<CartData>[]; // Cast the payload to Draft<CartData>[]
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
      state.data.push(action.payload);
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
      const itemIdToRemove = action.payload;
      state.data = state.data.filter(
        (item) => item.phone_id !== itemIdToRemove
      );
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
