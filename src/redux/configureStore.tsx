import { createLogger } from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
import newsSlice from "./news/News";

const logger = createLogger();

const store = configureStore({
  reducer: {
    news: newsSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
