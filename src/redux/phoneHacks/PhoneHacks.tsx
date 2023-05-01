import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PhoneHacksState, Hack } from "./types";
import defaultState from "./defaultState";

const timeout = 3000;

const initialState: PhoneHacksState = {
  hacks: defaultState,
};

const phoneHacksSlice = createSlice({
  name: "phoneHacks",
  initialState,
  reducers: {
    fetchHacks: (state, action: PayloadAction<Hack[]>) => {
      setTimeout(() => {
        state.hacks = action.payload;
      }, timeout);
    },
  },
});

export const { fetchHacks } = phoneHacksSlice.actions;

export default phoneHacksSlice.reducer;
