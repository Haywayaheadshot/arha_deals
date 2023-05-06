import { createLogger } from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
import newsSlice from "./news/News";
import phoneHacksReducer from "./phoneHacks/PhoneHacks";
import exclusiveItemsReducer from "./exclusiveItems/ExclusiveItems";

const logger = createLogger();

const store = configureStore({
  reducer: {
    news: newsSlice,
    hacks: phoneHacksReducer,
    items: exclusiveItemsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
