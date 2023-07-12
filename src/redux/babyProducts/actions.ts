import { createAsyncThunk } from "@reduxjs/toolkit";
import { BabyProductsData } from "./types";
import axios from "axios";

const getBabyProductsApi = "http://127.0.0.1:5000/api/baby_products";

// action creators for display phones
const getBabyProducts = createAsyncThunk(
  "src/redux/babyProducts/getBabyProducts",
  async () => {
    const response = await axios.get<BabyProductsData[]>(getBabyProductsApi);
    const babyProducts = response.data;
    return babyProducts;
  }
);

export default getBabyProducts;
