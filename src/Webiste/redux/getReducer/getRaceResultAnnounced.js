import axios from "axios";
import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
    IDLE : 'idle',
    ERROR:'error',
    LOADING: 'loading',
});

const getraceresultDeclaredSlice = createSlice({
    name: 'raceresultDeclared',
    initialState: {
        data:[],
        status : STATUSES.IDLE,
    },

    extraReducers: (builder) => {
        builder
        .addCase(fetchraceresultDeclared.pending, (state, action) => {
            state.status = STATUSES.LOADING;
        })
        .addCase(fetchraceresultDeclared.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = STATUSES.IDLE
        })
        .addCase(fetchraceresultDeclared.rejected , (state,action) => {
            state.status = STATUSES.ERROR;
        })
    }
});

export const {setraceresultDeclared , setStatus} = getraceresultDeclaredSlice.actions;
export default getraceresultDeclaredSlice.reducer;

export const fetchraceresultDeclared = createAsyncThunk('/raceresultDeclaredget/fetch', async() => {
    const res = await axios.get(`${window.env.API_URL}/AllDeclaredRaces`);
    const raceresultDeclaredData = res.data;
    return raceresultDeclaredData.data;
})