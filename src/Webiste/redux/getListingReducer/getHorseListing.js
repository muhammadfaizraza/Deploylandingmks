import axios from "axios";
import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
    IDLE : 'idle',
    ERROR:'error',
    LOADING: 'loading',
});

const getHorseListingSlice = createSlice({
    name: 'horseListing',
    initialState: {
        data:[],
        status : STATUSES.IDLE,
    },

    extraReducers: (builder) => {
        builder
        .addCase(fetchHorseListing.pending, (state, action) => {
            state.status = STATUSES.LOADING;
        })
        .addCase(fetchHorseListing.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = STATUSES.IDLE
        })
        .addCase(fetchHorseListing.rejected , (state,action) => {
            state.status = STATUSES.ERROR;
        })
    }
});

export const {setHorseListing , setStatus} = getHorseListingSlice.actions;
export default getHorseListingSlice.reducer;

export const fetchHorseListing = createAsyncThunk('/horseListingget/fetch', async() => {
    const res = await axios.get(`${window.env.API_URL}/HorseDropDown?keyword=&page=&limit=100`);
    const horseListingData = res.data;
    return horseListingData.data;
})

