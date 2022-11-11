import React from "react";
import Auth from './Auth';
// import Notification from './Notification';
import SearchBar from './SearchBar';
import Logo from '../assets/Group.png'
import { useLocation } from "react-router-dom";
import '../Components/CSS/sidebar.css'
import { Link } from "react-router-dom";

const Header = () => {
  let {pathname} = useLocation();

  return (
    <>
    {
      pathname !== '/' ?<div className="headerdash">
      <div className="innerHeader1">
        <div className="logoclass11">
         <Link to='/' className='LinkStyle'>
         <img src={Logo} alt="" />
         </Link>
        </div>
        <div className="searchclass">
          <SearchBar />
        </div>
        <div className="notificationclass">
          
        </div>
        <div className="authclass">
          <Auth />
        </div>
      </div>
    </div> : null
    }
    </>
    
  );
};

export default Header;
