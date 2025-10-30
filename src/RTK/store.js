import { configureStore } from "@reduxjs/toolkit";
import { favoriteSlice, pokemontSlice } from "./slice";
import Favorite from "../pages/Favorite";

export const store = configureStore({
  reducer: {
    pokemon: pokemontSlice.reducer,
    favorite: favoriteSlice.reducer
  }
})