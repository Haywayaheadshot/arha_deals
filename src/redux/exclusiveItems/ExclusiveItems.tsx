import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ExclusiveItemsState, Items } from "./types";
import defaultState from "./defaultState";

const timeout = 3000;

const initialState: ExclusiveItemsState = {
  items: defaultState,
};

const exclusiveItemsSlice = createSlice({
  name: "exclusiveItems",
  initialState,
  reducers: {
    fetchItems: (state, action: PayloadAction<Items[]>) => {
      setTimeout(() => {
        state.items = action.payload;
      }, timeout);
    },
  },
});

export const { fetchItems } = exclusiveItemsSlice.actions;

export default exclusiveItemsSlice.reducer;
