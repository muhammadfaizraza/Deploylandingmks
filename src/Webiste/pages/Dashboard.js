import Layout from "../Components/Reuseable/layout";
import "../Components/CSS/pagesCSS/about.css";
import Footer from "../Components/Reuseable/Footer.jsx";
import CoptRight from "../Components/Reuseable/Copyrights";
import "../Components/CSS/pagesCSS/horse.css";
import '../Components/CSS/pagesCSS/profile.css'
import {BsCalendarDate , BsClock,BsPerson,BsKey ,BsCurrencyDollar} from 'react-icons/bs';
import {FaRegListAlt} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate()

  return (
    
    <>
      <Layout />
      <div className="aboutpage">
        <div className="aboutpageheader">
          <h2>MKS Racing Dashboard</h2>
        </div>
        <div className="coldashboard">
        <div className="flexcontainer">
          <div><BsCalendarDate/><p>Races</p></div>
          <div><BsClock /><p>My Selections</p></div>
          <div><FiUsers /><p>Winner's List</p></div>  
          <div><FiUsers/><p>Competition Point</p> </div>
          <div><FiUsers/><p>Winning Details</p></div>
          <div onClick={() => {navigate('/myresult')}}><FaRegListAlt/><p>Result</p></div>  
          <div onClick={() => {navigate('/userProfile')}}><BsPerson/><p>My Profile</p></div>
          <div onClick={() => {navigate('/changepassword')}}><BsKey/><p>Change Password</p></div>
          <div onClick={() => {navigate('/mytracker')}}><FiUsers/><p>My Tracker</p></div>
          <div><BsCurrencyDollar/><p>Total Earning</p></div>
        </div>
        </div>
        
      </div>
      <Footer />
      <CoptRight />
    </>
  );
};
export default Dashboard;
