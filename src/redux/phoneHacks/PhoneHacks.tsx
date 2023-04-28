import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import defaultState from "./defaultState";

interface Hack {
  id: string;
  title: string;
  os: string;
  description: string;
  video_url: string;
  advantages: string;
}

interface PhoneHacksState {
  hacks: Hack[];
}

const initialState: PhoneHacksState = {
  hacks: defaultState,
};

const phoneHacksSlice = createSlice({
  name: "phoneHacks",
  initialState,
  reducers: {
    addHack: (state: PhoneHacksState, action: PayloadAction<Hack>) => {
      state.hacks.push(action.payload);
    },
  },
});

// export const { addHack } = phoneHacksSlice.actions;
export default phoneHacksSlice.reducer;
