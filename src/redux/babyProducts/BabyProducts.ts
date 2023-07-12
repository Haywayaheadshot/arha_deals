import { createSlice } from "@reduxjs/toolkit";
import BabyProducts from "./types";
import getBabyProducts from "./actions";

const initialState: BabyProducts = {
  data: [],
  success: false,
  loading: true,
};

const babyProductsSlice = createSlice({
  name: "babyProducts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBabyProducts.fulfilled, (state, action) => {
      state.data = action.payload;
      state.success = true;
      state.loading = false;
    });
    builder.addCase(getBabyProducts.rejected, (state) => {
      state.success = false;
      state.loading = false;
    });
    builder.addCase(getBabyProducts.pending, (state) => {
      state.success = false;
      state.loading = true;
    });
  },
});

export default babyProductsSlice.reducer;
