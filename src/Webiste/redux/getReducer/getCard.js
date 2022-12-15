import axios from 'axios';
const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
});

const getCard = createSlice({
    name: 'Card',
    initialState: {
        data: [],
        status: STATUSES.IDLE,
    },
 
    extraReducers: (builder) => {
        builder
            .addCase(fetchRace.pending, (state, action) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(fetchRace.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE;
            })
            .addCase(fetchRace.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
            });
    },
});

export const { setRace, setStatus } = getCard.actions;
export default getCard.reducer;

export const fetchRace = createAsyncThunk('raceGet/fetch', async () => {
    const res = await axios.get(`${window.env.API_URL}/RaceCardget `)
    const data =  res.data;
    return data.data;
});



