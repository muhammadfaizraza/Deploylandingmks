import axios from "axios";
import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
    IDLE : 'idle',
    ERROR:'error',
    LOADING: 'loading',
});

const getSingleRace = createSlice({
    name: 'singlerace',
    initialState: {
        data:[],
        status : STATUSES.IDLE,
    },

    extraReducers: (builder) => {
        builder
        .addCase(fetchSinglerace.pending, (state, action) => {
            state.status = STATUSES.LOADING;
        })
        .addCase(fetchSinglerace.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = STATUSES.IDLE
        })
        .addCase(fetchSinglerace.rejected , (state,action) => {
            state.status = STATUSES.ERROR;
        })
    }
});

export const {setRace , setStatus} = getSingleRace.actions;
export default getSingleRace.reducer;

export const fetchSinglerace = createAsyncThunk('/singleraceget/fetch', async({id}) => {
        const res = await axios.get(`${window.env.API_URL}/getsinglerace/${id}`);
    const raceData = res.data;
    return raceData.data;
})