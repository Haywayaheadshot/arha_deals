import { createAsyncThunk } from "@reduxjs/toolkit";
import { PhonesData } from "./types";
import axios from "axios";

const getPhonesApi = "http://127.0.0.1:5000/api/phones";

// action creators for display phones
const getPhones = createAsyncThunk("src/redux/phones/getPhones", async () => {
  const response = await axios.get<PhonesData[]>(getPhonesApi);
  const phones = response.data;
  return phones;
});

export default getPhones;
