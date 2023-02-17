import axios from "axios";
import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
    IDLE : 'idle',
    ERROR:'error',
    LOADING: 'loading',
});

const getPredictionRaceSlice = createSlice({
    name: 'PredictionRace',
    initialState: {
        data:[],
        status : STATUSES.IDLE,
    },

    extraReducers: (builder) => {
        builder
        .addCase(fetchPredictionRace.pending, (state, action) => {
            state.status = STATUSES.LOADING;
        })
        .addCase(fetchPredictionRace.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = STATUSES.IDLE
        })
        .addCase(fetchPredictionRace.rejected , (state,action) => {
            state.status = STATUSES.ERROR;
        })
    }
});

export const {setPredictionRace , setStatus} = getPredictionRaceSlice.actions;
export default getPredictionRaceSlice.reducer;

export const fetchPredictionRace = createAsyncThunk('/PredictionRaceget/fetch', async() => {
        const res = await axios.get(`${window.env.API_URL}/raceprediction`);
    const PredictionRaceData = res.data;
    return PredictionRaceData.result;
})