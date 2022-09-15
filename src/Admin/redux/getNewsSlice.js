import axios from 'axios';
const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
});

const getNewsSlice = createSlice({
    name: 'news',
    initialState: {
        data: [],
        status: STATUSES.IDLE,
    },
 
    extraReducers: (builder) => {
        builder
            .addCase(fetchNews.pending, (state, action) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(fetchNews.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE;
            })
            .addCase(fetchNews.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
            });
    },
});

export const { setNews, setStatus } = getNewsSlice.actions;
export default getNewsSlice.reducer;

// Thunks
export const fetchNews = createAsyncThunk('newsGet/fetch', async () => {
    // const res = await fetch('https://mksbackend.herokuapp.com/api/v1/newsget');
    const res = await axios.get('https://mksbackend.herokuapp.com/api/v1/newsget')
    const data =  res.data;
    return data.data;
});


