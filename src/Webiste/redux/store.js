import { configureStore } from '@reduxjs/toolkit';
import getAdsSlice from './getReducer/getAdsSlice';
import getHorseSlice from './getReducer/getHorseSlice';
import getNewsSlice from './getReducer/getNewsSlice';
import getSponsorSlice from './getReducer/getSponsorSlice';
import getTrainerSlice from './getReducer/getTrainerSlice';
import getRaceCard from './getReducer/getRaceCard';
import getSlider from './getReducer/getSlider';
import userReducer from './getReducer/UserSlice'

const store = configureStore({
    reducer: {
        news: getNewsSlice,
        ads: getAdsSlice,
        sponsor: getSponsorSlice,
        horse: getHorseSlice,
        trainer: getTrainerSlice,
        racecard: getRaceCard,
        slider: getSlider,
        user: userReducer
    },
});

export default store;
