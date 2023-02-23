import axios from 'axios';
const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
});

const getRaceCourseRaceToday = createSlice({
    name: 'RaceCourseRaceToday',
    initialState: {
        data: [],
        status: STATUSES.IDLE,
    },
 
    extraReducers: (builder) => {
        builder
            .addCase(fetchRaceCourseToday.pending, (state, action) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(fetchRaceCourseToday.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE;
            })
            .addCase(fetchRaceCourseToday.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
            });
    },
});

export const { setRace, setStatus } = getRaceCourseRaceToday.actions;
export default getRaceCourseRaceToday.reducer;

export const fetchRaceCourseToday = createAsyncThunk('RaceCourseRaceToday/fetch', async () => {
    const res = await axios.get(`${window.env.API_URL}/AllRaceCourseRaceToday`)
    const data =  res.data;
    return data.data;
});


