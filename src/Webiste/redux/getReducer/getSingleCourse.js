import axios from "axios";
import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
    IDLE : 'idle',
    ERROR:'error',
    LOADING: 'loading',
});

const getSinglecourse = createSlice({
    name: 'singlecourse',
    initialState: {
        data:[],
        status : STATUSES.IDLE,
    },

    extraReducers: (builder) => {
        builder
        .addCase(fetchSinglecourse.pending, (state, action) => {
            state.status = STATUSES.LOADING;
        })
        .addCase(fetchSinglecourse.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = STATUSES.IDLE
        })
        .addCase(fetchSinglecourse.rejected , (state,action) => {
            state.status = STATUSES.ERROR;
        })
    }
});

export const {setRace , setStatus} = getSinglecourse.actions;
export default getSinglecourse.reducer;

export const fetchSinglecourse = createAsyncThunk('/singlecourseget/fetch', async({id}) => {
        const res = await axios.get(`${window.env.API_URL}/getsinglecourse/${id}`);
    const raceData = res.data;
    return raceData.data;
})