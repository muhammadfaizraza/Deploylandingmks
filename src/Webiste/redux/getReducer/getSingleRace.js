import axios from "axios";
import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
    IDLE : 'idle',
    ERROR:'error',
    LOADING: 'loading',
});

const getsinglerace = createSlice({
    name: 'singlerace',
    initialState: {
        data:[],
        status : STATUSES.IDLE,
    },

    extraReducers: (builder) => {
        builder
        .addCase(fetchsinglerace.pending, (state, action) => {
            state.status = STATUSES.LOADING;
        })
        .addCase(fetchsinglerace.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = STATUSES.IDLE
        })
        .addCase(fetchsinglerace.rejected , (state,action) => {
            state.status = STATUSES.ERROR;
        })
    }
});

export const {setRace , setStatus} = getsinglerace.actions;
export default getsinglerace.reducer;

export const fetchsinglerace = createAsyncThunk('/singleraceget/fetch', async({id}) => {
        const res = await axios.get(`${window.env.API_URL}/getsinglerace/${id}`);
    const raceData = res.data;
    return raceData.data;
})