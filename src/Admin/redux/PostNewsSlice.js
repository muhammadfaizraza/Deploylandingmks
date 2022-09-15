import axios from 'axios'
const {createSlice} = require('@reduxjs/toolkit');

const PostNewsSlice = createSlice({
    name: 'PostNews',
    initialState : [],
    reducers:{
        add(state,action){
          const response = axios.post(`https://mksbackend.herokuapp.com/api/v1/uploadnews`,action.payload)
          console.log(response)
        },

        remove(state, action){
            const response = axios.delete(`https://mksbackend.herokuapp.com/api/v1/deletenews/:id/${action.payload}`)
            console.log(response)
           return response;
        }
    }
})

export const {add , remove} = PostNewsSlice.actions;
export default PostNewsSlice.reducer;