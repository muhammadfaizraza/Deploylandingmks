import axios from "axios";
import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
    IDLE : 'idle',
    ERROR:'error',
    LOADING: 'loading',
});

const getPedigreeSlice = createSlice({
    name: 'Pedigree',
    initialState: {
        data:[],
        status : STATUSES.IDLE,
    },

    extraReducers: (builder) => {
        builder
        .addCase(fetchPedigree.pending, (state, action) => {
            state.status = STATUSES.LOADING;
        })
        .addCase(fetchPedigree.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = STATUSES.IDLE
        })
        .addCase(fetchPedigree.rejected , (state,action) => {
            state.status = STATUSES.ERROR;
        })
    }
});

export const {setPedigree , setStatus} = getPedigreeSlice.actions;
export default getPedigreeSlice.reducer;

export const fetchPedigree = createAsyncThunk('/Pedigreeget/fetch', async() => {
    // const res = await axios.get(`${window.env.API_URL}pedigreehorse/${'26c5cdf1-a711-4c5d-a0f1-81630292a388'}`);

    const res = await axios.get(`${window.env.API_URL}pedigreehorse/${'91bcc833-186e-4e38-a0e5-3e89ce89af12'}`);
    const PedigreeData = res.data;
    return PedigreeData;
})