import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
});

const getPredictorSlice = createSlice({
    name: 'predictor',
    initialState: {
        data: [],
        status: STATUSES.IDLE,
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchPredictor.pending, (state, action) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(fetchPredictor.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE
            })
            .addCase(fetchPredictor.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
            })
    }
});

export const { setAds, setStatus } = getPredictorSlice.actions;
export default getPredictorSlice.reducer;

export const fetchPredictor = createAsyncThunk('/predictor/fetch', async ({ RaceId }) => {
    const res = await axios.get(`${window.env.API_URL}/RacePredictor/${RaceId}`);
    const adsData = res.data;
    return adsData.data;
})