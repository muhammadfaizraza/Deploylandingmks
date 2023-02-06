import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
});

const getHorseHistorySlice = createSlice({
    name: 'horsehistory',
    initialState: {
        data: [],
        status: STATUSES.IDLE,
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchhorsehistory.pending, (state, action) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(fetchhorsehistory.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE
            })
            .addCase(fetchhorsehistory.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
            })
    }
});

export const { sethorsehistory, setStatus } = getHorseHistorySlice.actions;
export default getHorseHistorySlice.reducer;

export const fetchhorsehistory = createAsyncThunk('/horsehistory/fetch', async ({ horseid }) => {
    const res = await axios.get(`${window.env.API_URL}/horsehistory/${horseid}`);
    const horsehistoryData = res.data;
    return horsehistoryData.data;
})