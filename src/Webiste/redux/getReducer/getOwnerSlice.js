import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
});

const getOwnerSlice = createSlice({
    name: 'owner',

    initialState: {
        data: [],
        pageCount: null,
        status: STATUSES.IDLE,
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchowner.pending, (state, action) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(fetchowner.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE
            })
            .addCase(fetchowner.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
            })
    }
});

export const { setowner, setStatus } = getOwnerSlice.actions;
export default getOwnerSlice.reducer;

export const fetchowner = createAsyncThunk('/SearchOwner/fetch', async ({ currentPage, searchKeyword }) => {
    const res = await axios.get(`${window.env.API_URL}/SearchOwner?keyword=${searchKeyword}&page=${currentPage}`);
    const jockeyData = res.data;
    return jockeyData.data;
})  