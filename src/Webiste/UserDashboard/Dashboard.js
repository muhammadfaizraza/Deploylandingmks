import React from 'react';
import Header from "../Components/Reuseable/Header"
import Auth from "../Components/Reuseable/Auth"
import Search from '../Components/Home/Components/Search';
import Tracker from '../Components/Home/Components/Tracker';
import Notification from '../Components/Home/Components/Notification';
import ExNews from '../Components/Home/Components/ExNews';
import Language from '../Components/Home/Components/Language';
import { Link } from 'react-router-dom';

const Dashboard = () => {

  return (
    <>
      <div className='d-flex'>
        <Header />
        <Auth />
      </div>
      <div className="rightlayoutinner dashboardH">
        <ExNews />
        <Search />
        <Tracker />
        <Notification />
        <Language />

      </div>
      <div className='dashboardpage'>
        <div className='page'>

          <div className='rightsidedata'>

            <div className='DashboardCard'>

              <div className='OngoingRaces'>
                <p>Races </p>
               </div>
              <div className='GenerateReports'>
                <Link to='/myselection'>
                <p>My Selection</p>
                <h3>00</h3>
                </Link>
              </div>
              <div className='GenerateReports'>
                <Link to="/winnerlist">
                <p>Winner’s List</p>
                <h3>00</h3>
              </Link>
              </div>
              <div className='GenerateReports'>
                <Link to="/myresult">
                <p>Result</p>
                <h3>00</h3>
              </Link>
              </div>
              <div className='GenerateReports'>
                <Link to="/myprofile">
                <p>My Profile</p>
                </Link>
              </div>
              <div className='GenerateReports'>
                <Link to="/tracker">
                <p>Tracker</p>
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
