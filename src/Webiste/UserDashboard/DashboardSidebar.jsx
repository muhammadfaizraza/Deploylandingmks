import React from 'react'
import { Link } from 'react-router-dom'
import Accordion from 'react-bootstrap/Accordion';
import '../Components/CSS/sidebar.css';
import '../Components/CSS/pagesCSS/dashboard.css'
import { useLocation } from 'react-router-dom';


const Sidebar = () => {
  let {pathname} = useLocation();
  return (
    <div className='sidebar'>
  <Link to='/dashboard' className='mylink'>Dashboard</Link>
  <Link to='/dashboard' className='mylink'>Races</Link>
  <Link to='/dashboard' className='mylink'>Winner’s List</Link>
  <Link to='/dashboard' className='mylink'>My Selection</Link>
  <Link to='/dashboard' className='mylink'>Results</Link>
 

  </div>
  )
}

export default Sidebar