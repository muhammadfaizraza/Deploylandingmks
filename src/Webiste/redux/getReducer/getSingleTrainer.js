import axios from "axios";
import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

export const STATUSES = Object.freeze({
    IDLE : 'idle',
    ERROR:'error',
    LOADING: 'loading',
});

const getSingleTrainer = createSlice({
    name: 'singletrainer',
    initialState: {
        data:[],
        status : STATUSES.IDLE,
    },

    extraReducers: (builder) => {
        builder
        .addCase(fetchSingletrainer.pending, (state, action) => {
            state.status = STATUSES.LOADING;
        })
        .addCase(fetchSingletrainer.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = STATUSES.IDLE
        })
        .addCase(fetchSingletrainer.rejected , (state,action) => {
            state.status = STATUSES.ERROR;
        })
    }
});

export const {setTrainer , setStatus} = getSingleTrainer.actions;
export default getSingleTrainer.reducer;

export const fetchSingletrainer = createAsyncThunk('/singlejockeyget/fetch', async() => {
        const res = await axios.get(`${window.env.API_URL}/singletrainerget/${Cookies.get('sjockey')}`);
    const jockeysData = res.data;
    return jockeysData.RenderData;
})