import { createSlice } from "@reduxjs/toolkit";
import { fetchAdverts } from "./operations";
import {
  pendingReducer,
  rejectedReducer,
  fulfilledReducer,
} from "src/store/helpers/generalReducers";

const initialState = {
  items: [],
  page: 1,
  isLoading: false,
  error: null,
};

const advertsSlice = createSlice({
  name: "adverts",
  initialState,

  reducers: {
    setPage: (state, { payload }) => {
      state.page = payload;
    },
  },

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
export const { setPage } = advertsSlice.actions;

export const advertsReducer = advertsSlice.reducer;
