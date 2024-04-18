import { configureStore } from "@reduxjs/toolkit";
import { advertsReducer } from "./adverts/advertsSlice.js";

const store = configureStore({ reducer: { adverts: advertsReducer } });
export default store;
