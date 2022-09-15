import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Webiste/pages/Home';
import RaceCard from './Webiste/pages/RaceCard';
import RaceCardDetail from './Webiste/pages/RaceCardDetail';
import './Webiste/Components/CSS/mediaquery.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Admin/Components/Login';
import Dashboard from './Admin/Components/Dashboard';
import store from './Admin/redux/store'
import {Provider} from 'react-redux'

function App() {
  return (
    <>
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={  <Home /> } />
        <Route path='/racecard' exact element={  <RaceCard /> } />
        <Route path={`/racedetail/:id`}exact element={  <RaceCardDetail /> } />

        {/* Admin Route */}
        <Route path='/admin' element ={ <Login />} />
        <Route path='/dashboard' element ={ <Dashboard />} />
      </Routes>
    </BrowserRouter>
    </Provider>
    </>
  );
}

export default App;
