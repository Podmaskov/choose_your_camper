import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = { favorites: [] };

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, { payload }) => {
      state.favorites.push(payload);
    },
    removeFavorite: (state, { payload }) => {
      return {
        ...state,
        favorites: state.favorites.filter(
          (favoriteID) => favoriteID !== payload
        ),
      };
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;

export const persistedFavoritesReducer = persistReducer(
  { key: "favorites", storage },
  favoritesSlice.reducer
);
