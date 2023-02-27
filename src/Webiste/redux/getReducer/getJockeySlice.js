import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
});

const getJockeySlice = createSlice({
    name: 'jockey',

    initialState: {
        data: [],
        pageCount: null,
        status: STATUSES.IDLE,
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchJockey.pending, (state, action) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(fetchJockey.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE
            })
            .addCase(fetchJockey.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
            })
    }
});

export const { setJockey, setStatus } = getJockeySlice.actions;
export default getJockeySlice.reducer;

export const fetchJockey = createAsyncThunk('/SearchJockey/fetch', async ({ pageNumber, searchKeyword }) => {
    const res = await axios.get(`${window.env.API_URL}/SearchJockey?keyword=${searchKeyword}&page=${pageNumber}&limit=10`);
    const jockeyData = res.data;
    return jockeyData.data;
})  