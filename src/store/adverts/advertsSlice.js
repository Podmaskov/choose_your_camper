import { createSlice } from "@reduxjs/toolkit";
import { fetchAdverts } from "./operations";
import {
  pendingReducer,
  rejectedReducer,
  fulfilledReducer,
} from "src/store/helpers/generalReducers";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const advertsSlice = createSlice({
  name: "adverts",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchAdverts.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.isLoading = false;
      })
      .addMatcher((action) => action.type.endsWith("/pending"), pendingReducer)
      .addMatcher(
        (action) => action.type.endsWith("/fulfilled"),
        fulfilledReducer
      )
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        rejectedReducer
      );
  },
});

export const advertsReducer = advertsSlice.reducer;
