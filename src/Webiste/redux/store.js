import { configureStore } from '@reduxjs/toolkit';
import getAdsSlice from './getReducer/getAdsSlice';
import getHorseSlice from './getReducer/getHorseSlice';
import getNewsSlice from './getReducer/getNewsSlice';
import getSponsorSlice from './getReducer/getSponsorSlice';
import getTrainerSlice from './getReducer/getTrainerSlice';
import getRaceCard from './getReducer/getRaceCard';
import getSlider from './getReducer/getSlider';
import userReducer from './getReducer/UserSlice'
import getRaceCourse from './getReducer/getRaceCourse';
import getJockeySlice from './getReducer/getJockeySlice';
import getOwnerSlice from './getReducer/getOwnerSlice';
import { getUserDetails } from './postReducer/UserPost';
import getUserProfile from './getReducer/getUserProfile';
import getSingleHorse from './getReducer/getSingleHorse';
import  getSingleJockey  from './getReducer/getSingleJockey';
import getSingleTrainer from './getReducer/getSingleTrainer';
import getSingleRace from './getReducer/getSingleRace';
import getSeo from './getReducer/getSeo';
import getCard from './getReducer/getCard';
import getSingleCourse from './getReducer/getSingleCourse';
import getCompetition from './getReducer/getCompetition';
import getRaceResult from './getReducer/getRaceResult';
import getNationality from './getReducer/getNationality';
import getSingleUser from './getReducer/getSingleUser';
import getPedigree from './getReducer/getPedigree';

const store = configureStore({
    reducer: {
        news: getNewsSlice,
        ads: getAdsSlice,
        sponsor: getSponsorSlice,
        horse: getHorseSlice,
        trainer: getTrainerSlice,
        racecard: getRaceCard,
        slider: getSlider,
        user: userReducer,
        racecourse: getRaceCourse,
        jockey: getJockeySlice,
        owner:getOwnerSlice,
        userProfile: getUserDetails,
        profile: getUserProfile,
        singlehorse: getSingleHorse,
    singlejockey: getSingleJockey,
        singletrainer: getSingleTrainer,
        singlerace: getSingleRace,
        Seo: getSeo,
        Card: getCard,
        singlecourse:getSingleCourse,
        competition:getCompetition,
        raceresult:getRaceResult,
        nationality:getNationality,
        singleUser:getSingleUser,
        Pedigree:getPedigree
    },
});

export default store;
