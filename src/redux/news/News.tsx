import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface NewsData {
  author: string;
  content: string;
  date: string;
  imageUrl: string;
  readMoreUrl: string;
  time: string;
  title: string;
  url: string;
}

interface News {
  category: string;
  data: NewsData[];
  success: boolean;
  loading: boolean;
}

const initialState: News = {
  category: "",
  data: [],
  success: false,
  loading: true,
};

const getTechNewsApi = "https://inshorts.deta.dev/news?category=technology";

// action creators for display, join and leave missions
export const getTechNews = createAsyncThunk("src/redux/news/getTechNews", () =>
  axios.get<News>(getTechNewsApi).then((res) => {
    const news = res.data;
    return news;
  })
);

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTechNews.fulfilled, (state, action) => {
      state.category = "technology";
      state.data = action.payload.data;
      state.success = true;
      state.loading = false;
    });
    builder.addCase(getTechNews.rejected, (state) => {
      state.success = false;
      state.loading = false;
    });
    builder.addCase(getTechNews.pending, (state) => {
      state.success = false;
      state.loading = true;
    });
  },
});

export default newsSlice.reducer;
