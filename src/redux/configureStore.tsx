import { createLogger } from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
import newsSlice from "./news/News";
import phoneHacksSlice from "./phoneHacks/PhoneHacks";

const logger = createLogger();

const store = configureStore({
  reducer: {
    news: newsSlice,
    hacks: phoneHacksSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
