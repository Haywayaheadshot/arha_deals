import { createAction, PayloadAction } from "@reduxjs/toolkit";
import { Items } from "./types";

export const fetchItems = createAction<PayloadAction<Items[]>>("FETCH_ITEMS");
