import axios from 'axios';
import Cookies from 'js-cookie';
const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
});

const getProfile = createSlice({
    name: 'profile',
    initialState: {
        data: [],
        status: STATUSES.IDLE,
    },
 
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfile.pending, (state, action) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(fetchProfile.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE;
            })
            .addCase(fetchProfile.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
            });
    },
});

export const { setProfile, setStatus } = getProfile.actions;
export default getProfile.reducer;

export const fetchProfile = createAsyncThunk('profileGet/fetch', async () => {
    const config = {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`,
        },
      }
    
    const res = await axios.get(`${window.env.API_URL}/singlesubscriber/${Cookies.get('id' || '')}`, config)
    const data =  res.data;
    return data.data;
});