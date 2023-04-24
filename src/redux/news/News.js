import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const GET_TECH_NEWS = "ARHA_DEALS/src/redux/news/getTechNews";

const initialState = [];

const getTechNewsApi = "https://inshorts.deta.dev/news?category=technology";

// action creators for display, join and leave missions
export const getTechNews = createAsyncThunk(GET_TECH_NEWS, () =>
  axios.get(getTechNewsApi).then((res) => {
    const news = res.data;
    return news;
  })
);

const newsSlice = createSlice({
  name: "news",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getTechNews.fulfilled, (_, action) => action.payload);
    builder.addCase(getTechNews.rejected, (state) => {
      const newState = state;
      newState.status = "failed";
    });
    builder.addCase(getTechNews.pending, (_, action) => action.payload);
  },
});

export default newsSlice.reducer;
