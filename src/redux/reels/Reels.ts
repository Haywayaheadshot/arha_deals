import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface ReelsData {
  id: string | number;
  title: string;
  duration: {
    minutes: number;
    seconds: number;
  };
  video_src: string;
  category: string;
  description: string;
  link: string;
}

interface Reels {
  data: ReelsData[];
  success: boolean;
  loading: boolean;
}

const initialState: Reels = {
  data: [],
  success: false,
  loading: true,
};

const getReelsApi = "http://127.0.0.1:5000/api/reels";

export const fetchReels = createAsyncThunk("src/redux/news/getTechNews", () =>
  axios.get<Reels>(getReelsApi).then((res) => {
    const reels = res.data;
    return reels;
  })
);

const reelsSlice = createSlice({
  name: "reels",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchReels.fulfilled, (state, action) => {
      state.data = action.payload.data;
      state.success = true;
      state.loading = false;
    });
    builder.addCase(fetchReels.rejected, (state) => {
      state.success = false;
      state.loading = false;
    });
    builder.addCase(fetchReels.pending, (state) => {
      state.success = false;
      state.loading = true;
    });
  },
});

export default reelsSlice.reducer;
