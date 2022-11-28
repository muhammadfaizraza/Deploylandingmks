import React, { Fragment } from 'react'
import Header from '../Components/Reuseable/Header'
import Auth from '../Components/Reuseable/Auth'
import Notification from '../Components/Home/Components/Notification'
import Tracker from '../Components/Home/Components/Tracker'
import Search from '../Components/Home/Components/Search'
import ExNews from '../Components/Home/Components/ExNews'
import Language from '../Components/Home/Components/Language'

const WinnerList = () => {
  return (
<Fragment>

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
<div className="userHeader">
<h3>Winner’s  List</h3>

</div>
<div className='userHeader2'>
    <h6>Competitions</h6>

    <h6>Races</h6>

</div>
<div>
<div className="row winnerRow">
<h6>Competition Name</h6>

            </div>
            <div className="row winnerRow">
<h6>Competition Name</h6>

            </div>
    
            <div className="row compDetail">
<h5>Competition Name</h5>
<div className='winnerDetail'>
    <h6>Winners</h6>

    <h6>Race 01</h6>

</div>
<div className='winnerDetail'>
    <h6>Winners</h6>

    <h6>Race 01</h6>

</div>
<div className='winnerDetail'>
    <h6>Winners</h6>

    <h6>Race 01</h6>

</div>
            </div>

</div>


</Fragment>
  )
}

export default WinnerList