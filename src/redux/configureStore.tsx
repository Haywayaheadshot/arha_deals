import { createLogger } from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
import newsSlice from "./news/News";
import phoneHacksReducer from "./phoneHacks/PhoneHacks";

const logger = createLogger();

const store = configureStore({
  reducer: {
    news: newsSlice,
    hacks: phoneHacksReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
