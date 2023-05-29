import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface PhonesData {
  id: number;
  name: string;
  amount: number;
  stock: number;
  images_src: [];
  spec: object;
  condition: string;
  video_src: string;
}

interface Phones {
  data: PhonesData[];
  success: boolean;
  loading: boolean;
}

const initialState: Phones = {
  data: [],
  success: false,
  loading: true,
};

const getPhonesApi = "http://127.0.0.1:5000/api/phones";

// action creators for display phones
export const getPhones = createAsyncThunk(
  "src/redux/phones/getPhones",
  async () => {
    const response = await axios.get<PhonesData[]>(getPhonesApi);
    const phones = response.data;
    return phones;
  }
);

const phonesSlice = createSlice({
  name: "phones",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPhones.fulfilled, (state, action) => {
      state.data = action.payload;
      state.success = true;
      state.loading = false;
    });
    builder.addCase(getPhones.rejected, (state) => {
      state.success = false;
      state.loading = false;
    });
    builder.addCase(getPhones.pending, (state) => {
      state.success = false;
      state.loading = true;
    });
  },
});

export default phonesSlice.reducer;
