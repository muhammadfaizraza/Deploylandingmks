import { configureStore } from '@reduxjs/toolkit';
import getNewsSlice from './getNewsSlice';
import PostNewsSlice from './PostNewsSlice';

const store = configureStore({
    reducer: {
        news: getNewsSlice,
        PostNews: PostNewsSlice,
    },
});

export default store;
