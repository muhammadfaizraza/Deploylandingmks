import axios from "axios";
import Cookies from 'js-cookie'

import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
    IDLE : 'idle',
    ERROR:'error',
    LOADING: 'loading',
});

const getsingleUserSlice = createSlice({
    name: 'singleUser',
    initialState: {
        data:[],
        status : STATUSES.IDLE,
    },

    extraReducers: (builder) => {
        builder
        .addCase(fetchsingleUser.pending, (state, action) => {
            state.status = STATUSES.LOADING;
        })
        .addCase(fetchsingleUser.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = STATUSES.IDLE
        })
        .addCase(fetchsingleUser.rejected , (state,action) => {
            state.status = STATUSES.ERROR;
        })
    }
});

export const {setsingleUser , setStatus} = getsingleUserSlice.actions;
export default getsingleUserSlice.reducer;

const config = {
    headers: {
      Authorization: `Bearer ${Cookies.get('token')}`,
    },
  }
export const fetchsingleUser = createAsyncThunk('/singleUserget/fetch', async() => {
    const res = await axios.get(`${window.env.API_URL}/singlesubscriber/${Cookies.get('id')}`,config);
    const singleUserData = res.data;
    return singleUserData.data;
})