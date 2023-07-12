import { createSlice } from "@reduxjs/toolkit";
import Phones from "./types";
import getPhones from "./actions";

const initialState: Phones = {
  data: [],
  success: false,
  loading: true,
};

const phonesSlice = createSlice({
  name: "phones",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPhones.fulfilled, (state, action) => {
      state.data = action.payload;
      state.success = true;
      state.loading = false;
    });
    builder.addCase(getPhones.rejected, (state) => {
      state.success = false;
      state.loading = false;
    });
    builder.addCase(getPhones.pending, (state) => {
      state.success = false;
      state.loading = true;
    });
  },
});

export default phonesSlice.reducer;
