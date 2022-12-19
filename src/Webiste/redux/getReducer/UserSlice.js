import Cookies from 'js-cookie'
import { createSlice } from '@reduxjs/toolkit'
// import { getUserDetails, registerUser, userLogin } from './userActions'
import { registerUser, getUserDetails,userLogin } from '../postReducer/UserPost'

const token = Cookies.get('token')
  ? Cookies.get('token')
  : null

const initialState = {
  loading: false,
  userInfo: null,
  token,
  error: null,
  success: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      Cookies.remove('token')
      Cookies.remove('id')
      state.loading = false
      state.userInfo = null
      state.token = null
      state.error = null
    },
  },
  extraReducers: {
    
    [userLogin.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.userInfo = payload
      state.token = payload.token
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
    
    [registerUser.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.userInfo = payload
      state.success = true // registration successful
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
    // get user details
    [getUserDetails.pending]: (state) => {
      state.loading = true
    },
    [getUserDetails.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.userInfo = payload
    },
    [getUserDetails.rejected]: (state, { payload }) => {
      state.loading = false
    },
  },
})

export const { logout } = userSlice.actions

export default userSlice.reducer