import { createAction, PayloadAction } from "@reduxjs/toolkit";
import { Hack } from "./types";

export const fetchHacks = createAction<PayloadAction<Hack[]>>("FETCH_HACKS");
