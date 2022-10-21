import axios from 'axios';
const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
});

const getSlider = createSlice({
    name: 'slider',
    initialState: {
        data: [],
        status: STATUSES.IDLE,
    },
 
    extraReducers: (builder) => {
        builder
            .addCase(fetchSlider.pending, (state, action) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(fetchSlider.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE;
            })
            .addCase(fetchSlider.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
            });
    },
});

export const { setSlider, setStatus } = getSlider.actions;
export default getSlider.reducer;

export const fetchSlider = createAsyncThunk('sliderGet/fetch', async () => {
    const res = await axios.get(`${window.env.API_URL}/Sliderget?keyword=&page=1&limit=`)
    const data =  res.data;
    return data.data;
});