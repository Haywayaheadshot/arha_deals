import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PhoneHacksState, Hack } from "./types";
import defaultState from "./defaultState";

const initialState: PhoneHacksState = {
  hacks: defaultState,
};

const phoneHacksSlice = createSlice({
  name: "phoneHacks",
  initialState,
  reducers: {
    fetchHacks: (state, action: PayloadAction<Hack[]>) => {
      state.hacks = action.payload;
    },
  },
});

export const { fetchHacks } = phoneHacksSlice.actions;

export default phoneHacksSlice.reducer;
