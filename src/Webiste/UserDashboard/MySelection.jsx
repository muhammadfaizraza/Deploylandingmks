import React,{ Fragment }  from 'react'
import Header from "../Components/Reuseable/Header"
import Auth from "../Components/Reuseable/Auth"
import '../../Webiste/Components/CSS/pagesCSS/dashboard.css'
import Search from '../Components/Home/Components/Search';
import Tracker from '../Components/Home/Components/Tracker';
import Notification from '../Components/Home/Components/Notification';
import ExNews from '../Components/Home/Components/ExNews';
import Language from '../Components/Home/Components/Language';


const MySelection = () => {
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
<h3>My Selections</h3>

</div>
 


  </Fragment>
  )
}

export default MySelection