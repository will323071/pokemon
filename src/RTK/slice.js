import { createSlice } from "@reduxjs/toolkit";
import { fetchMultiplePokemonsById } from "./thunk";

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        data: [],
        loading: true,
    },
    reducers: {}, // 동기적 상태 변경
    extraReducers: (builder) => {
        builder
        .addCase(fetchMultiplePokemonsById.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchMultiplePokemonsById.rejected, (state) => {
            state.loading = false;
        })
        .addCase(fetchMultiplePokemonsById.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })
    }
})