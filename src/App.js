import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Home from './Webiste/pages/Home';
import RaceCard from './Webiste/pages/RaceCard';
import RaceCardDetail from './Webiste/pages/RaceCardDetail';
import './Webiste/Components/CSS/mediaquery.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import store from './Webiste/redux/store'
import {Provider} from 'react-redux'
import Registration from './Webiste/pages/Registration';
import Login from './Webiste/pages/Login';
import Dashboard from './Webiste/UserDashboard/Dashboard';
import ProtectedRoute from './Webiste/Components/Reuseable/ProtectedRoute';
import RaceCourse from './Webiste/pages/RaceCourse';
import About from './Webiste/pages/About';
import Result from './Webiste/pages/Result';
import Competition from './Webiste/pages/Competition';
import Sponsor from './Webiste/pages/Sponsor';
import Stats from './Webiste/pages/Stats';
import Horse from './Webiste/pages/Horse';
import Trainer from './Webiste/pages/Trainer';
import Jockey from './Webiste/pages/Jockey';
import HorseDetail from './Webiste/pages/HorseDetail';
import OwnerDetail from './Webiste/pages/OwnerDetail';
import QueryTool from './Webiste/pages/QueryTool';
import Profile from './Webiste/pages/AuthPages/Profile';
import ChangePassword from './Webiste/pages/AuthPages/ChangePassword';
import UserResult from './Webiste/pages/AuthPages/UserResult';
import MyTracker from './Webiste/UserDashboard/Tracker';
import JockeyDetail from './Webiste/pages/JockeyDetail';
import TrainerDetail from './Webiste/pages/TrainerDetail';
import { useState, useEffect } from "react";
import CompetitionModal from './Webiste/Components/Competition/Competition';
import MySelection from './Webiste/UserDashboard/MySelection';
import MyProfile from './Webiste/UserDashboard/MyProfile';
import WinnerList from './Webiste/UserDashboard/WinnerList';
import RaceDetails from './Webiste/pages/RaceDetails';
import BlogDetails from './Webiste/pages/BlogDetails';
import Policy from './Webiste/pages/Policy';
import TestPedigree from './Webiste/pages/Test';


function App() {
  const [userIsDesktop, setUserIsDesktop] = useState(true);
  useEffect(() => {
    window.innerWidth > 360 ? setUserIsDesktop(true) : setUserIsDesktop(false);
  }, [userIsDesktop]);
  return (
    <>
    <ToastContainer /> 
    {userIsDesktop ?  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={  <Home /> } />
        <Route path="/racecard"  element={  <RaceCard /> } />
        <Route path={'/racedetail'} element={  <Home /> } />
        <Route path={'/racedetails'} element={  <RaceDetails /> } />
        <Route path='/login'  element={  <Login /> } />
        <Route path='/registration'  element={  <Registration /> } />
        <Route path='/racecourse'  element={  <RaceCourse /> } />
        <Route path='/about'  element={  <About /> } />
        <Route path='/policies'  element={  <Policy /> } />
        <Route path='/result'  element={  <Result /> } />
        <Route path='/competition'  element={  <Competition /> } />
        <Route path='/sponsor'  element={  <Sponsor /> } />
        <Route path='/statistics'  element={  <Stats /> } />
        <Route path='/horse'  element={  <Horse /> } />
        <Route path='/trainer'  element={  <Trainer /> } />
        <Route path='/jockey'  element={  <Jockey /> } />
        <Route path='/horsedetail'  element={  <HorseDetail /> } />
        <Route path='/ownerdetail'  element={  <OwnerDetail /> } />
        <Route path='/querytool'  element={  <QueryTool /> } />
        <Route path='/jockeydetail'  element={  <JockeyDetail /> } />
        <Route path='/trainerdetail'  element={  <TrainerDetail /> } />
        <Route path='/blogdetails'  element={  <BlogDetails /> } />
        <Route path='/competitionmodal'  element={  <CompetitionModal /> } />
        <Route path='/testpedigree'  element={  <TestPedigree /> } />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path='/dashboard'  element={  <Dashboard /> } />
          <Route path='/myprofile'  element={  <MyProfile /> } />
          <Route path='/myselection'  element={  <MySelection /> } />
          <Route path='/winnerlist'  element={  <WinnerList/> } />
          <Route path='/userProfile'  element={  <Profile /> } />
          <Route path='/changepassword' element={<ChangePassword />} />
          <Route path='/myresult' element={ <UserResult /> }/>
          <Route path='/tracker' element={ <MyTracker /> }/>
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider> : <h1 style={{
      display:'flex',
      justifyContent:'center',
      alignItem:'center'    }}>Not Available in this device</h1>}
   
    </>
  );
}

export default App;
