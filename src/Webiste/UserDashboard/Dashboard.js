import React from 'react';
import Sidebar from './DashboardSidebar';
import DashboardHeader from './DashboardHeader'

const Dashboard = () => {

  return (
    <>
    <DashboardHeader />
    <div className='dashboardpage'>
      <Sidebar />
    <div className='page'>
      <div className='rightsidedata'>
        <div className='dashboardpageheader'>
          <h3>Hassam kazmi</h3>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Dashboard
