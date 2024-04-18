import { createAsyncThunk } from "@reduxjs/toolkit";
import { mockAPI } from "src/api/mockAPI";

export const fetchAdverts = createAsyncThunk(
  "adverts/fetchAdverts",
  async (_, thunkAPI) => {
    try {
      const { data } = await mockAPI.get("advert", { signal: thunkAPI.signal });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
