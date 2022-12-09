import axios from 'axios';
const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');


export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
});

const getRaceCourse = createSlice({
    name: 'racecourse',
    initialState: {
        data: [],
        status: STATUSES.IDLE,
    },
 
    extraReducers: (builder) => {
        builder
            .addCase(fetchCourse.pending, (state, action) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(fetchCourse.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE;
            })
            .addCase(fetchCourse.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
            });
    },
});

export const { setRaceCourse, setStatus } = getRaceCourse.actions;
export default getRaceCourse.reducer;

export const fetchCourse = createAsyncThunk('CourseGet/fetch', async () => {
    const res = await axios.get(`${window.env.API_URL}/getracecourse?page=${'1'}&keyword= `)
    const data =  res.data;
    return data.data;
});


