import { configureStore } from "@reduxjs/toolkit";
import { advertsReducer } from "./adverts/advertsSlice.js";
import { favoritesReducer } from "./favorites/favoritesSlice.js";

const store = configureStore({
  reducer: { adverts: advertsReducer, favorites: favoritesReducer },
});
export default store;
