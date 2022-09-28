import 'bootstrap/dist/css/bootstrap.min.css';
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
import ProfileScreen from './Webiste/pages/Profile';
import ProtectedRoute from './Webiste/Components/Reuseable/ProtectedRoute';
import RaceCourse from './Webiste/pages/RaceCourse';
import About from './Webiste/pages/About';
import Result from './Webiste/pages/Result';
import Competition from './Webiste/pages/Competition';
import Sponsor from './Webiste/pages/Sponsor';
import Stats from './Webiste/pages/Stats';

function App() {
  return (
    <>
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={  <Home /> } />
        <Route path="/racecard"  element={  <RaceCard /> } />
        <Route path={'/racedetail/:_id'} element={  <RaceCardDetail /> } />
        <Route path='/login'  element={  <Login /> } />
        <Route path='/registration'  element={  <Registration /> } />
        <Route path='/racecourse'  element={  <RaceCourse /> } />
        <Route path='/about'  element={  <About /> } />
        <Route path='/result'  element={  <Result /> } />
        <Route path='/competition'  element={  <Competition /> } />
        <Route path='/sponsor'  element={  <Sponsor /> } />
        <Route path='/statistics'  element={  <Stats /> } />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
        <Route path='/user-profile'  element={  <ProfileScreen /> } />
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
    </>
  );
}

export default App;
