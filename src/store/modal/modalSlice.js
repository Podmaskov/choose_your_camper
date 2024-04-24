import { createSlice } from "@reduxjs/toolkit";

const initialState = { isModalOpen: false, advertId: null };

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, { payload }) => {
      state.isModalOpen = true;
      state.advertId = payload;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
      state.advertId = null;
    },
  },
});

export const modalReducer = modalSlice.reducer;
export const { openModal, closeModal } = modalSlice.actions;
