// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import defaultState from "./defaultState";

// interface Hack {
//   id: string;
//   title: string;
//   os: string;
//   description: string;
//   video_url: string;
//   advantages: string;
// }

// interface PhoneHacksState {
//   hacks: Hack[];
// }

// const initialState: PhoneHacksState = {
//   hacks: defaultState,
// };

// const phoneHacksSlice = createSlice({
//   name: "phoneHacks",
//   initialState,
//   reducers: {
//     addHack: (state: PhoneHacksState, action: PayloadAction<Hack>) => {
//       state.hacks.push(action.payload);
//     },
//   },
// });

// export const { addHack } = phoneHacksSlice.actions;
// export default phoneHacksSlice.reducer;

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
