import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
});

const getRacewithNumberSlice = createSlice({
    name: 'racewithnumber',
    initialState: {
        data: [],
        status: STATUSES.IDLE,
    },


});

export const { setracewithnumber, setStatus } = getRacewithNumberSlice.actions;
export default getRacewithNumberSlice.reducer;

export const fetchRacewithNumberSlice = createAsyncThunk('/TodaysRacesAlltoAll/fetch', async ({ racecourseid }) => {
    const res = await axios.get(`${window.env.API_URL}/TodaysRacesAlltoAll/${racecourseid}`);
    const racewithnumber = res.data;
    return racewithnumber.data;
})