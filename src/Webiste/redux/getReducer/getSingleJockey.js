import axios from "axios";
import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

export const STATUSES = Object.freeze({
    IDLE : 'idle',
    ERROR:'error',
    LOADING: 'loading',
});

const getSingleJockey = createSlice({
    name: 'singlejockey',
    initialState: {
        data:[],
        status : STATUSES.IDLE,
    },

    extraReducers: (builder) => {
        builder
        .addCase(fetchSinglejockey.pending, (state, action) => {
            state.status = STATUSES.LOADING;
        })
        .addCase(fetchSinglejockey.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = STATUSES.IDLE
        })
        .addCase(fetchSinglejockey.rejected , (state,action) => {
            state.status = STATUSES.ERROR;
        })
    }
});

export const {setJockey , setStatus} = getSingleJockey.actions;
export default getSingleJockey.reducer;

export const fetchSinglejockey = createAsyncThunk('/singlejockeyget/fetch', async() => {
        const res = await axios.get(`${window.env.API_URL}/singlejockey/${Cookies.get('sjockey')}`);
    const jockeysData = res.data;
    return jockeysData.data;
})