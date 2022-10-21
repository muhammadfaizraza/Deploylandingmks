import axios from "axios";
import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

export const STATUSES = Object.freeze({
    IDLE : 'idle',
    ERROR:'error',
    LOADING: 'loading',
});

const getSingleHorse = createSlice({
    name: 'singlehorse',
    initialState: {
        data:[],
        status : STATUSES.IDLE,
    },

    extraReducers: (builder) => {
        builder
        .addCase(fetchSingleHorse.pending, (state, action) => {
            state.status = STATUSES.LOADING;
        })
        .addCase(fetchSingleHorse.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = STATUSES.IDLE
        })
        .addCase(fetchSingleHorse.rejected , (state,action) => {
            state.status = STATUSES.ERROR;
        })
    }
});

export const {setHorse , setStatus} = getSingleHorse.actions;
export default getSingleHorse.reducer;



export const fetchSingleHorse = createAsyncThunk('/horseget/fetch', async() => {
    const res = await axios.get(`${window.env.API_URL}/getsinglehorse/${Cookies.get('sjockey')}`);
    const horseData = res.data;
    return horseData.RenderData;
})